import * as yup from "yup";

import { Navigate, useParams } from "react-router-dom";

// import { CurrentUserContext } from 'contexts/CurrentUser';
import ResetView from "./ResetView";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { userUpdatePasswordWithToken } from "components/User/mutations";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const ResetContainer = () => {
  // const { signIn } = useContext(CurrentUserContext);
  const { token } = useParams();
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

  const [resetPw] = useMutation(userUpdatePasswordWithToken, {
    variables: {
      input: {
        password: "",
        passwordConfirmation: "",
        resetPasswordToken: "",
      },
    },
  });

  const onSubmit = useCallback(
    ({ password, passwordConfirmation, resetPasswordToken }) =>
      resetPw({
        variables: { password, passwordConfirmation, resetPasswordToken },
      })
        .then(({ data: { Reset } }) => {
          console.log(Reset);
          const message =
            "Success! You can now sign in with your new password.";
          setRedirect("/sign-in?message=" + message);
        })
        .catch(err => {
          // @todo -- better way to map server-side error to proper input
          // or we create a general error field (toast?)
          setError("password", {
            type: "manual",
            message: err?.message,
          });
          console.log(err);
        }).redirect,
    [resetPw, setError]
  );

  const doSubmit = handleSubmit(onSubmit);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <ResetView
      doSubmit={doSubmit}
      control={control}
      errors={errors}
      isValid={isValid}
      token={token}
    />
  );
};

export default ResetContainer;
