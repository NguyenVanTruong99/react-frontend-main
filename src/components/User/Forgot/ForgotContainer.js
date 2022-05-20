import * as yup from "yup";

// import { CurrentUserContext } from 'contexts/CurrentUser';
import ForgotView from "./ForgotView";
import { Navigate } from "react-router-dom";
import { useCallback } from "react";
// import styles from './ForgotStyles';
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { userSendPasswordResetWithToken } from "components/User/mutations";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
  })
  .required();

const ForgotContainer = () => {
  // const { signIn } = useContext(CurrentUserContext);
  const [redirect, setRedirect] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [forgotPw] = useMutation(userSendPasswordResetWithToken, {
    variables: {
      email: "",
      redirectUrl: "localhost:3000/reset-password",
    },
  });
  const onSubmit = useCallback(
    ({ email }) =>
      forgotPw({ variables: { email } })
        .then(({ data: { Forgot } }) => {
          const message =
            "If your email is registerd with NoXX, you will recieve a password reset email.";
          setRedirect("/sign-in?message=" + message);
        })
        .catch(err => {
          // @todo -- better way to map server-side error to proper input
          // or we create a general error field (toast?)
          setError(
            err?.message?.includes("credentials") ? "password" : "email",
            {
              type: "manual",
              message: err?.message,
            }
          );
        }),
    [forgotPw, setError, setRedirect]
  );

  const doSubmit = handleSubmit(onSubmit);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <ForgotView
      doSubmit={doSubmit}
      control={control}
      errors={errors}
      isValid={isValid}
    />
  );
};

export default ForgotContainer;
