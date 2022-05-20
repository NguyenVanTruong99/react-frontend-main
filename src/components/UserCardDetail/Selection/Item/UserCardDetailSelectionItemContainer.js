import { useCallback } from "react";
import UserCardDetailSelectionItemView from "./UserCardDetailSelectionItemView";
import { getUserCard } from "components/UserCard/queries";
import { useMutation } from "@apollo/client";
import {
  addUserCardDetailToUserCard,
  removeUserCardDetailFromUserCard,
} from "components/UserCardDetail/mutations";

const UserCardDetailSelectionItemContainer = ({ userCard, userCardDetail }) => {
  const [addDetail] = useMutation(addUserCardDetailToUserCard, {
    variables: {
      input: {
        userCardId: userCard?.id,
        userCardDetailId: userCardDetail.id,
      },
    },
    refetchQueries: [
      {
        query: getUserCard,
        variables: {
          id: userCard?.id,
        },
      },
    ],
  });

  const [removeDetail] = useMutation(removeUserCardDetailFromUserCard, {
    variables: {
      input: {
        userCardId: userCard?.id,
        userCardDetailId: userCardDetail.id,
      },
    },
    refetchQueries: [
      {
        query: getUserCard,
        variables: {
          id: userCard?.id,
        },
      },
    ],
  });

  const handleChange = useCallback(
    () =>
      userCard.userCardDetails.find(ucd => ucd.id === userCardDetail.id)
        ? removeDetail()
        : addDetail(),
    [userCard, userCardDetail, addDetail, removeDetail]
  );

  return (
    <UserCardDetailSelectionItemView
      userCard={userCard}
      userCardDetail={userCardDetail}
      onChange={handleChange}
    />
  );
};

export default UserCardDetailSelectionItemContainer;
