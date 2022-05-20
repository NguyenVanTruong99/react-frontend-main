import UserCardDetailsNavView from "./UserCardDetailsNavView";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@apollo/client";

const UserCardDetailsNavContainer = ({ userCard }) => {
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

  const nextUserCardId =
    userCards[userCards.findIndex(uc => uc.id === userCard?.id) + 1]?.id;
  const previousUserCardId =
    userCards[userCards.findIndex(uc => uc.id === userCard?.id) - 1]?.id;
  const lastUserCardId = userCards[userCards.length - 1]?.id;
  const firstUserCardId = userCards[0]?.id;

  const handleNext = useCallback(
    () => navigate(`/add-cards/${nextUserCardId}/details`),
    [nextUserCardId, navigate]
  );

  const handlePrevious = useCallback(
    () => navigate(`/add-cards/${previousUserCardId}/details`),
    [previousUserCardId, navigate]
  );

  const handleQuitClick = useCallback(() => navigate("/add-cards"), [navigate]);

  return (
    <UserCardDetailsNavView
      userCard={userCard}
      userCards={userCards}
      onNext={userCard?.id === lastUserCardId ? null : handleNext}
      onPrevious={userCard?.id === firstUserCardId ? null : handlePrevious}
      onQuitClick={handleQuitClick}
    />
  );
};

export default UserCardDetailsNavContainer;
