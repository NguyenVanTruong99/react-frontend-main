import * as yup from "yup";

import {
  createWantListCard,
  deleteWantListCard,
  updateWantListCard,
} from "../mutations";
import {
  getWantListCardByUserIdAndCardId,
  listMyWantListCards,
} from "../queries";
import { useCallback, useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { CurrentUserContext } from "contexts/CurrentUser";
import WantListCardActionsButtonView from "./WantListCardActionsButtonView";
import { listCardGradesByCardId } from "components/CardGrade/queries";
import { listGrades } from "components/Grade/queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const WantListCardActionsButtonContainer = ({
  wantlistCard,
  wlCard,
  sx,
  color,
  size,
  editOnly,
}) => {
  const schema = yup
    .object({
      comment: yup.string().max(64, "Must be 64 characters or less"),
    })
    .required();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const isOpen = Boolean(anchorEl);
  const [deleteWantListOpen, setDeleteWantListOpen] = useState(false);
  const handleDeleteWantListOpen = useCallback(
    () => setDeleteWantListOpen(true),
    []
  );
  const handleDeleteWantListClose = useCallback(
    () => setDeleteWantListOpen(false),
    []
  );
  const [addClipOpen, setAddClipOpen] = useState(false);
  const [gradeId, setGradeId] = useState(false);
  const handleAddClipOpen = useCallback(() => setAddClipOpen(true), []);
  const handleAddClipClose = useCallback(
    e => [e.stopPropagation(), setAddClipOpen(false)],
    []
  );
  const [unfollowOpen, setUnfollowOpen] = useState(false);
  const handleUnfollowOpen = useCallback(() => [setUnfollowOpen(true)], []);
  const handleUnfollowClose = useCallback(() => [setUnfollowOpen(false)], []);

  const handleAddCardsClick = useCallback(
    event => [event.stopPropagation(), setCardModalOpen(true)],
    []
  );

  const ownerId = wantlistCard?.userId;
  const cardId = wantlistCard?.id;

  const {
    error,
    data: { getWantListCardByUserIdAndCardId: wantListCard } = {},
  } = useQuery(getWantListCardByUserIdAndCardId, {
    skip: !currentUser?.authenticatable?.id,
    variables: {
      cardId,
      userId: currentUser?.authenticatable?.id,
    },
  });

  const { data: { listCardGradesByCardId: cardGrades = [] } = {} } = useQuery(
    listCardGradesByCardId,
    {
      // pollInterval: 5000,
      skip: !cardId,
      variables: {
        cardId: cardId,
      },
    }
  );

  const { err, data: { listGrades: grades = [] } = {} } = useQuery(listGrades);

  const [_createWantListCard] = useMutation(createWantListCard, {
    variables: {
      input: {
        cardId,
      },
    },
    refetchQueries: [
      {
        query: listMyWantListCards,
      },
      {
        query: getWantListCardByUserIdAndCardId,
        variables: {
          cardId,
          userId: currentUser?.authenticatable?.id,
        },
      },
    ],
  });

  const [_deleteWantListCard] = useMutation(deleteWantListCard, {
    variables: {
      input: {
        id: wantListCard?.id,
      },
    },
    refetchQueries: [
      {
        query: listMyWantListCards,
      },
      {
        query: getWantListCardByUserIdAndCardId,
        variables: {
          cardId,
          userId: currentUser?.authenticatable?.id,
        },
      },
    ],
  });

  const mutation = !!wantListCard ? _deleteWantListCard : _createWantListCard;

  const handleUnfollow = useCallback(
    () => mutation().catch(console.error),
    [mutation]
  );

  const handleClick = useCallback(
    event => [event.stopPropagation(), setAnchorEl(event.currentTarget)],
    []
  );

  const editCard = card => {
    Promise.all([setEditOpen(true)]);
  };

  const handleEdit = useCallback(
    event => [event.stopPropagation(), editCard(event)],
    []
  );

  const handleClose = useCallback(
    event => [event?.stopPropagation?.(), setAnchorEl(null)],
    []
  );

  const handleDelete = useCallback(
    event => [
      event?.stopPropagation?.(),
      handleUnfollow(),
      handleUnfollowClose(),
    ],
    [handleUnfollow, handleUnfollowClose]
  );

  const allGrades = [
    ...new Map([...cardGrades].map(item => [item.id, item])).values(),
  ];

  const service = allGrades.find(item => item.id === wlCard.cardGradeId)
    ?.gradeVendor?.name;

  const [update] = useMutation(updateWantListCard, {
    refetchQueries: [
      {
        query: listMyWantListCards,
        variables: {
          offsetAttributes: {
            limit: 100,
          },
        },
      },
    ],
  });

  const onSubmit = useCallback(
    ({
      budgetHigh,
      budgetLow,
      willTradeFor,
      willBuy,
      cardGradeId,
      isHigher,
      comment,
    }) =>
      update({
        variables: {
          input: {
            id: wlCard.id,
            budgetHigh: parseFloat(budgetHigh),
            budgetLow: parseFloat(budgetLow),
            willTradeFor,
            willBuy,
            cardGradeId: cardGradeId,
            isHigher,
            comment,
          },
        },
      }).then(editClose),
    [wlCard, update]
  );

  const doSubmit = handleSubmit(onSubmit);

  const editClose = useCallback(
    () => [setEditOpen(false), setAnchorEl(null)],
    []
  );

  return wlCard ? (
    <WantListCardActionsButtonView
      currentUser={currentUser}
      wantlistCard={wantlistCard}
      onClose={handleClose}
      isOpen={isOpen}
      onClick={handleClick}
      anchorEl={anchorEl}
      onEdit={handleEdit}
      editOpen={editOpen}
      onEditClose={editClose}
      showModal={showModal}
      onCancel={setShowModal.bind(null, false)}
      sx={sx}
      color={color}
      userCollectionId={wantlistCard?.id}
      onAddCardsClick={handleAddCardsClick}
      size={size}
      unfollowOpen={unfollowOpen}
      handleUnfollowOpen={handleUnfollowOpen}
      handleUnfollowClose={handleUnfollowClose}
      onDelete={handleDelete}
      control={control}
      watch={watch}
      allGrades={allGrades}
      onSubmit={doSubmit}
      wlCard={wlCard}
      service={service}
      editOnly={editOnly}
      errors={errors}
      isValid={isValid}
    />
  ) : null;
};

export default WantListCardActionsButtonContainer;
