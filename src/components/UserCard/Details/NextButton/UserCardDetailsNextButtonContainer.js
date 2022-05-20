import { useCallback } from "react";
import UserCardDetailsNextButtonView from "./UserCardDetailsNextButtonView";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router";

const UserCardDetailsNextButtonContainer = ({ userCard, ...rest }) => {
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

  const lastUserCard = userCards[userCards.length - 1];
  const nextUserCardId =
    userCards[userCards.findIndex(uc => uc.id === userCard?.id) + 1]?.id;

  const handleNext = useCallback(
    () => navigate(`/add-cards/${nextUserCardId}/details`),
    [nextUserCardId, navigate]
  );

  return (
    <UserCardDetailsNextButtonView
      onClick={userCard?.id !== lastUserCard?.id ? handleNext : null}
      {...rest}
    />
  );
};

export default UserCardDetailsNextButtonContainer;
