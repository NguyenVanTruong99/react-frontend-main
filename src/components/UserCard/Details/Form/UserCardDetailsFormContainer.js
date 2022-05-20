import * as yup from "yup";

import { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { DateTime } from "luxon";
import UserCardDetailsFormView from "./UserCardDetailsFormView";
import { listCardGradesByCardId } from "components/CardGrade/queries";
import { listGrades } from "components/Grade/queries";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { updateUserCard } from "components/UserCard/mutations";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import withoutBlanks from "utils/withoutBlanks";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    // year: yup.string().required('required'),
    // manufacturer: yup.string().required('required'),
    // cardSet: yup.string().required('required'),
    // cardNum: yup.string().optional(),
    // parallel: yup.string().optional(),
  })
  .required();

const UserCardDetailsFormContainer = ({
  userCard,
  editing = false,
  onCancel,
}) => {
  const navigate = useNavigate();
  const { data: { listMyStagedUserCards: userCards = [] } = {} } = useQuery(
    listMyStagedUserCards,
    {
      // pollInterval: 5000,
      variables: {
        offsetAttributes: {
          limit: 100,
        },
      },
    }
  );

  const { data: { listCardGradesByCardId: cardGrades = [] } = {} } = useQuery(
    listCardGradesByCardId,
    {
      // pollInterval: 5000,
      skip: !userCard?.cardId,
      variables: {
        cardId: userCard?.cardId,
      },
    }
  );

  const { error, data: { listGrades: grades = [] } = {} } =
    useQuery(listGrades);

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const lastUserCard = userCards[userCards.length - 1];
  const nextUserCardId =
    userCards[userCards.findIndex(uc => uc.id === userCard?.id) + 1]?.id;
  const thisUserCardId = userCard?.id;
  const gradingCost = watch("gradingCost");
  const purchasePrice = watch("purchasePrice");
  const totalCost =
    (parseFloat(purchasePrice) || 0) + (parseFloat(gradingCost) || 0);
  const [focus, setFocused] = useState(false);
  const [hasGradeChecked, setGradeChecked] = useState(false);
  const [acquisitionDate, setAcquisitionDate] = useState(null);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const formatDate = date => DateTime.fromISO(date).toFormat("yyyy-MM-dd");

  const handleGradeToggle = useCallback(
    () => setGradeChecked(!hasGradeChecked),
    [hasGradeChecked]
  );

  const [update] = useMutation(updateUserCard, {
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

  const handleSkip = useCallback(
    () =>
      lastUserCard !== thisUserCardId
        ? !!nextUserCardId
          ? navigate(`/add-cards/${nextUserCardId}/details`)
          : navigate(`/`)
        : navigate(`/add-cards`),

    [nextUserCardId, lastUserCard, thisUserCardId, navigate]
  );

  const handleEditSave = useCallback(
    () =>
      navigate(`/collectors-cards/${thisUserCardId}`)[
        (thisUserCardId, navigate)
      ]
  );

  const onSubmit = useCallback(
    ({
      storageLocation,
      purchasePrice,
      acquisitionSource,
      cardStatus,
      editionNumber,
      editionSize,
      acquiredAt,
      gradingCost,
      gradeId,
      cardGradeId,
      isPublic,
    }) =>
      update({
        variables: {
          input: withoutBlanks({
            id: thisUserCardId,
            isStaged: false,
            cardStatus,
            purchasePrice: !!purchasePrice
              ? parseFloat(purchasePrice)
              : undefined,
            gradingCost: !!gradingCost ? parseFloat(gradingCost) : undefined,
            acquisitionSource,
            storageLocation,
            editionNumber: !!editionNumber
              ? parseInt(editionNumber)
              : undefined,
            editionSize: !!editionSize ? parseInt(editionSize) : undefined,
            acquiredAt,
            gradeId,
            cardGradeId,
            isPublic,
          }),
        },
      }).then(editing ? handleEditSave : handleSkip),
    [thisUserCardId, handleSkip, update, handleEditSave]
  );

  const doSubmit = handleSubmit(onSubmit);

  !!error && console.error(error);

  const [dateValue, setDateValue] = useState(null);

  const handleDateChange = newValue => {
    setDateValue(newValue);
  };

  useEffect(() => {
    setAcquisitionDate(
      editing
        ? userCard.acquiredAt
          ? DateTime.fromISO(userCard.acquiredAt, { zone: "utc" })
          : null
        : null
    );
  }, [setAcquisitionDate]);

  console.log(acquisitionDate);

  return (
    <UserCardDetailsFormView
      userCard={userCard}
      control={control}
      errors={errors}
      isValid={isValid}
      onSubmit={doSubmit}
      onSkip={userCard?.id !== lastUserCard?.id ? handleSkip : undefined}
      grades={grades}
      totalCost={totalCost}
      cardGrades={cardGrades}
      onFocus={onFocus}
      onBlur={onBlur}
      focus={focus}
      hasValue={hasValue}
      setHasValue={setHasValue}
      hasGradeChecked={hasGradeChecked}
      handleGradeToggle={handleGradeToggle}
      getValues={getValues}
      setValue={setValue}
      watch={watch}
      dateValue={dateValue}
      handleDateChange={handleDateChange}
      editing={editing}
      onCancel={onCancel}
      acquisitionDate={acquisitionDate}
      setAcquisitionDate={setAcquisitionDate}
      allGrades={[
        ...new Map(
          [...cardGrades.map(cg => cg.grade), ...grades].map(item => [
            item.id,
            item,
          ])
        ).values(),
      ]}
    />
  );
};

// [...new Map(objArray.map((item) => [item["id"], item])).values()]

export default UserCardDetailsFormContainer;
