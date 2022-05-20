import { createWantListCard, deleteWantListCard } from "../mutations";
import {
  getWantListCardByUserIdAndCardId,
  listMyWantListCards,
} from "../queries";
import { useCallback, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { CurrentUserContext } from "contexts/CurrentUser";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const WantListAddRemoveIconButtonContainer = ({ cardId, size = "large" }) => {
  const { currentUser } = useContext(CurrentUserContext);
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
  const Icon = !!wantListCard ? StarIcon : StarOutlineIcon;

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

  const handleClick = useCallback(() => {
    mutation().catch(console.error);
  }, [mutation]);

  !!error && console.error(error);

  return (
    <Icon
      sx={{
        cursor: "pointer",
      }}
      fontSize={size}
      color="primary"
      onClick={handleClick}
    />
  );
};

export default WantListAddRemoveIconButtonContainer;
