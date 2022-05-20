import * as yup from "yup";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  loginFacebookUser,
  loginGoogleUser,
  loginUser,
} from "components/User/mutations";
import { useCallback, useContext } from "react";

import { CurrentUserContext } from "contexts/CurrentUser";
import React from "react";
import UserSignInView from "./UserSignInView";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    remember: yup.boolean(),
  })
  .required();

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const UserSignInContainer = ({ isModal = false, redirectTo="/" }) => {
  const { signIn } = useContext(CurrentUserContext);
  const [redirect, setRedirect] = useState(false);
  let query = useQuery();
  const message = query.get("message");
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [login] = useMutation(loginUser, {
    variables: {
      email: "",
      password: "",
    },
  });

  const [loginFacebook] = useMutation(loginFacebookUser, {
    variables: {
      email: "",
      uid: "",
      accessToken: "",
      signedRequest: "",
    },
  });

  const [loginGoogle] = useMutation(loginGoogleUser, {
    variables: {
      email: "",
      imageUrl: "",
      name: "",
    },
  });

  function rememberMe(value) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getDate() + 30,
    };
    localStorage.setItem("user", JSON.stringify(item));
  }

  const onSubmit = useCallback(
    ({ email, password, remember }) =>
      login({ variables: { email, password } })
        .then(({ data: { userLogin } }) => {
          if (remember) {
            rememberMe(userLogin);
          }
          signIn(userLogin);
          setRedirect(redirectTo);
        })
        .catch(err => {
          setError(
            err?.message?.includes("credentials") ? "password" : "email",
            {
              type: "manual",
              message: err?.message,
            }
          );
        }).redirect,
    [signIn, setError, login, setRedirect]
  );

  const onFacebookLogin = useCallback(
    ({ uid, email, accessToken, signedRequest }) =>
      loginFacebook({
        variables: { input: { uid, email, accessToken, signedRequest } },
      })
        .then(({ data: { userFacebookLogin } }) => {
          signIn(userFacebookLogin);
          setRedirect("/");
        })
        .catch(err => {
          const message =
            "This email is already registered with NoXX. Please sign in.";
          navigate("/sign-in?message=" + message);
        }),
    [signIn, loginFacebook, setRedirect, navigate]
  );

  const onGoogleLogin = useCallback(
    ({ uid, email, imageUrl, firstName, lastName }) =>
      loginGoogle({
        variables: { input: { uid, email, imageUrl, firstName, lastName } },
      })
        .then(({ data: { userGoogleLogin } }) => {
          signIn(userGoogleLogin);
          setRedirect("/");
        })
        .catch(err => {
          const message =
            "This email is already registered with NoXX. Please sign in.";
          navigate("/sign-in?message=" + message);
        }),
    [signIn, loginGoogle, setRedirect, navigate]
  );

  const doSubmit = handleSubmit(onSubmit);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <UserSignInView
      control={control}
      doSubmit={doSubmit}
      errors={errors}
      isValid={isValid}
      onFacebookLogin={onFacebookLogin}
      onGoogleLogin={onGoogleLogin}
      message={message}
      isModal={isModal}
    />
  );
};

export default UserSignInContainer;
