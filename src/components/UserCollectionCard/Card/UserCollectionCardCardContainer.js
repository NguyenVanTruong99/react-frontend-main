import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserCollectionCardCardView from "./UserCollectionCardCardView";

const UserCollectionCardCardContainer = ({ userCollectionCard }) => {
  const navigate = useNavigate();
  const coverImage =
    userCollectionCard.userCard.userCardImages[0]?.imageUrl ??
    userCollectionCard.userCard.card.frontUrl;
  const userCardId = userCollectionCard.userCardId;
  const handleNavigate = useCallback(
    () => navigate(`/collectors-cards/${userCardId}`),
    [navigate, userCardId]
  );

  return (
    <UserCollectionCardCardView
      userCollectionCard={userCollectionCard}
      coverImage={coverImage}
      onNavigate={handleNavigate}
    />
  );
};

export default UserCollectionCardCardContainer;
