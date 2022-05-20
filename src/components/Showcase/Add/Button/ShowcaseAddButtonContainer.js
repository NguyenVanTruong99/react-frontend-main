import { useMutation } from "@apollo/client";
import { useCallback, useState, useContext } from "react";
import ShowcaseAddButtonView from "./ShowcaseAddButtonView";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ModalStateContext } from "contexts/ModalState";
import { createUserCollection } from "components/UserCollection/mutations";
import { listMyShowcases } from "components/UserCollection/queries";

const schema = yup
  .object({
    name: yup.string().required("required"),
    description: yup.string().required("required"),
  })
  .required();

const ShowcaseAddButtonContainer = ({ userId }) => {
  const { addShowcaseModalOpen, setAddShowcaseModalOpen } =
    useContext(ModalStateContext);
  const [userCollectionId, setUserCollectionId] = useState();
  const [create] = useMutation(createUserCollection, {
    refetchQueries: [listMyShowcases],
  });
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleCreate = useCallback(
    userCollectionId => [
      setUserCollectionId(userCollectionId),
      setCardModalOpen(true),
      setAddShowcaseModalOpen(false),
    ],
    []
  );

  const onSubmit = useCallback(
    ({ name, description }) =>
      create({
        variables: {
          input: {
            name,
            description,
          },
        },
      })
        .then(({ data: { createUserCollection: userCollection } }) =>
          setUserCollectionId(userCollection.id)
        )
        .then(() => [setValue("name", ""), setValue("description", "")])
        .then(setAddShowcaseModalOpen?.bind?.(null, false))
        .then(setCardModalOpen.bind(null, true)),
    [create, setValue]
  );

  const doSubmit = handleSubmit(onSubmit);

  return (
    <ShowcaseAddButtonView
      setAddShowcaseModalOpen={setAddShowcaseModalOpen}
      setCardModalOpen={setCardModalOpen}
      addShowcaseModalOpen={addShowcaseModalOpen}
      cardModalOpen={cardModalOpen}
      onSubmit={doSubmit}
      errors={errors}
      isValid={isValid}
      isSubmitting={isSubmitting}
      control={control}
      onCreate={handleCreate}
      userCollectionId={userCollectionId}
    />
  );
};

export default ShowcaseAddButtonContainer;
