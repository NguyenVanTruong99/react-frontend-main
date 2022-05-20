import { useMutation } from "@apollo/client";
import { useCallback, useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  createUserCollection,
  updateUserCollection,
} from "components/UserCollection/mutations";
import { listMyShowcases, listShowcasesByUserId } from "components/UserCollection/queries";
import ShowcaseFormView from "./ShowcaseFormView";
import { CurrentUserContext } from "contexts/CurrentUser";

const schema = yup
  .object({
    name: yup.string().required("required"),
    description: yup.string().required("required"),
  })
  .required();

const ShowcaseFormContainer = ({ showcase, onSuccess, onCancel, mode }) => {
  const [items, setItems] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  const userId = currentUser?.authenticatable?.id;
  console.log("userId", userId)
  const {
    id: showcaseId,
    name: showcaseName,
    description: showcaseDescription,
  } = showcase ?? {};

  const [create] = useMutation(createUserCollection, {
    refetchQueries: [
      {
        query: listShowcasesByUserId,
        variables: {
          userId
        }
      }
    ],
  });

  const [update] = useMutation(updateUserCollection, {
    refetchQueries: [
      {
        query: listShowcasesByUserId,
        variables: {
          userId
        }
      }
    ],
  });

  const mutate = useMemo(
    () => (!!showcaseId ? update : create),
    [update, create, showcaseId]
  );
  const dataKey = !!showcaseId
    ? "updateUserCollection"
    : "createUserCollection";

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    ({ name, description }) =>
      mutate({
        variables: {
          input: {
            id: showcaseId ?? undefined,
            name: name ?? showcaseName ?? undefined,
            description: description ?? showcaseDescription ?? undefined,
          },
        },
      })
        .then(({ data: { [dataKey]: userCollection } }) =>
          onSuccess(userCollection.id)
        )
        .then(() => [setValue("name", ""), setValue("description", "")]),
    [
      mutate,
      dataKey,
      setValue,
      onSuccess,
      showcaseDescription,
      showcaseName,
      showcaseId
    ]
  );

  const doSubmit = handleSubmit(onSubmit);

  return (
    <ShowcaseFormView
      showcaseId={showcaseId}
      showcaseDescription={showcaseDescription}
      showcaseName={showcaseName}
      onCancel={onCancel}
      onSubmit={doSubmit}
      errors={errors}
      isValid={isValid}
      isSubmitting={isSubmitting}
      control={control}
      items={items}
      setItems={setItems}
      mode={mode}
    />
  );
};

export default ShowcaseFormContainer;
