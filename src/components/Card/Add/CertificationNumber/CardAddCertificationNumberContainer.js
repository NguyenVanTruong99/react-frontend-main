import * as yup from "yup";

import CardAddCertificationNumberView from "./CardAddCertificationNumberView";
import { createUserCardByCertNumberAndService } from "components/UserCard/mutations";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    certNumber: yup.string().required("required"),
    service: yup.string().required("required"),
  })
  .required();

const CardAddCertificationNumberContainer = ({ onSubmit: passedOnSubmit }) => {
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSubmitError = useCallback(
    (field, error) =>
      setError(field, {
        ...error,
        message: error.message,
      }),
    [setError]
  );

  const [create] = useMutation(createUserCardByCertNumberAndService, {
    refetchQueries: [
      {
        query: listMyStagedUserCards,
        variables: {
          offsetAttributes: {
            limit: 100,
          },
        },
      },
    ],
  });

  const onSubmit = useCallback(
    ({ service, certNumber }) =>
      create({ variables: { service, certNumber, isStaged: true } })
        .then(({ data: { createUserCardByCertNumberAndService } }) =>
          passedOnSubmit(createUserCardByCertNumberAndService)
        )
        .then(() => setValue("certNumber", ""))
        .catch(
          err =>
            console.error(err) ||
            handleSubmitError("certNumber", {
              message: "Sorry. We couldn't find your cert. Try again",
            })
        ),
    [create, passedOnSubmit, setValue, handleSubmitError]
  );

  const doSubmit = handleSubmit(onSubmit);

  return (
    <CardAddCertificationNumberView
      doSubmit={doSubmit}
      control={control}
      errors={errors}
      isValid={isValid}
    />
  );
};

export default CardAddCertificationNumberContainer;
