import * as yup from "yup";

import { useCallback, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import CardSearch from "components/Card/Search";
import GradeBadge from "components/Grade/Badge";
import UserCardEditDetailsView from "./UserCardEditDetailsView";
import { getUserCard } from "components/UserCard/queries";
import { updateUserCard } from "components/UserCard/mutations";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "hooks/useWindowDimensions";
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

const UserCardEditDetailsContainer = ({ userCardId }) => {
  const navigate = useNavigate();
  const [editCancelOpen, setEditCancelOpen] = useState(false);
  const handleEditCancelOpen = useCallback(() => setEditCancelOpen(true), []);
  const handleEditCancelClose = useCallback(() => setEditCancelOpen(false), []);

  const { width: windowWidth } = useWindowDimensions();

  const { error, data: { getUserCard: userCard } = {} } = useQuery(
    getUserCard,
    {
      variables: {
        id: userCardId,
      },
    }
  );

  const {
    control,
    handleSubmit,
    // watch,
    // formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [update] = useMutation(updateUserCard);

  const handleCancel = useCallback(
    event => {
      event.stopPropagation();
      navigate(`/collectors-cards/${userCardId}`);
    },
    [navigate, userCardId]
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
    }) =>
      update({
        variables: {
          input: withoutBlanks({
            id: userCardId,
            cardStatus,
            gradeId,
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
          }),
        },
      }).then(() => navigate(`/collectors-cards/${userCardId}`)),
    [update, navigate, userCardId]
  );

  const doSubmit = handleSubmit(onSubmit);

  const [matchUserCard] = useMutation(updateUserCard, {
    refetchQueries: [
      {
        query: getUserCard,
        variables: {
          id: userCardId,
        },
      },
    ],
  });

  const handleCardSelect = useCallback(
    cardId =>
      matchUserCard({
        variables: {
          input: {
            id: userCard.id,
            cardId,
          },
        },
      }).then(console.log),
    [userCard, matchUserCard]
  );

  !!error && console.error(error);

  !!error && console.log("error", error);

  return !userCard ? null : (
    <UserCardEditDetailsView
      userCard={userCard}
      control={control}
      onSubmit={doSubmit}
      windowWidth={windowWidth}
      onCancel={handleCancel}
      editCancelOpen={editCancelOpen}
      handleEditCancelOpen={handleEditCancelOpen}
      handleEditCancelClose={handleEditCancelClose}
      GradeBadge={GradeBadge}
      CardSearch={CardSearch}
      handleCardSelect={handleCardSelect}
    />
  );
};

export default UserCardEditDetailsContainer;
