import * as yup from "yup";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginFacebookUser, loginGoogleUser } from "components/User/mutations";
// import { loginUser } from "components/User/mutations";
import { useCallback, useContext } from "react";

import { CurrentUserContext } from "contexts/CurrentUser";
import React from "react";
import UserRegisterView from "./UserRegisterView";
import { registerUser } from "components/User/mutations";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    username: yup
      .string()
      .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters allowed")
      .max(17, 'Username limited to 17 characters')
      .required("Username is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    agree: yup
      .boolean()
      .oneOf([true], "You must agree to the Privacy Policy and Terms of Service."),
  })
  .required();

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const UserRegisterContainer = ({ isModal = false, redirectTo="/" }) => {
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

  const [register] = useMutation(registerUser, {
    variables: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
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

  const onSubmit = useCallback(
    ({ email, password, passwordConfirmation, username }) =>
      register({
        variables: { email, password, passwordConfirmation, username },
      })
        .then(({ data: { registerUser } }) => {
          signIn(registerUser);
          setRedirect(redirectTo);
        })
        .catch(err => {
          console.error(err);
          // @todo -- better way to map server-side error to proper input
          // or we create a general error field (toast?)
          setError(
            err?.message?.includes("credentials") ? "password" : "email",
            {
              type: "manual",
              message: err?.message,
            }
          );
        }).redirect,
    [register, signIn, setError, setRedirect]
  );

  const onFacebookLogin = useCallback(
    ({ uid, email, accessToken, signedRequest }) =>
      loginFacebook({
        variables: { input: { uid, email, accessToken, signedRequest } },
      })
        .then(({ data: { userFacebookLogin } }) => {
          signIn(userFacebookLogin);
          setRedirect("/my-collection");
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
          setRedirect("/my-collection");
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
    <UserRegisterView
      doSubmit={doSubmit}
      control={control}
      errors={errors}
      isValid={isValid}
      onFacebookLogin={onFacebookLogin}
      onGoogleLogin={onGoogleLogin}
      message={message}
      isModal={isModal}
    />
  );
};

export default UserRegisterContainer;
