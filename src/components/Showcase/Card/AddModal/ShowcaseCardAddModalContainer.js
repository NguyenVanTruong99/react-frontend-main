import { useMutation } from "@apollo/client";
import ShowcaseCardAddModalView from "./ShowcaseCardAddModalView";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserCollectionCard } from "components/UserCollectionCard/mutations";
import { getUserCollection } from "components/UserCollection/queries";

const ShowcaseCardAddModalContainer = ({
  setCardModalOpen,
  cardModalOpen,
  userCollectionId,
}) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedUserCards, setSelectedUserCards] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const searchRef = useRef();
  const [_createUserCollectionCard] = useMutation(createUserCollectionCard, {
    refetchQueries: [
      {
        query: getUserCollection,
        variables: {
          id: userCollectionId,
        },
      },
    ],
  });

  const handleRemoveUserCard = useCallback(
    (userCard, event) => [
      event?.stopPropagation?.(),
      setSelectedUserCards(selectedUserCards =>
        selectedUserCards.filter(uc => uc.id !== userCard.id)
      ),
    ],
    []
  );

  const handleSelectUserCard = useCallback(
    (userCard, event) => [
      event?.stopPropagation?.(),
      setSelectedUserCards(selectedUserCards => [
        userCard,
        ...selectedUserCards.filter(uc => uc.id !== userCard.id),
      ]),
    ],
    []
  );

  const handleSave = useCallback(
    event => [
      event?.stopPropagation?.(),
      Promise.all([
        setIsSaving(true),
        ...selectedUserCards.map(item =>
          _createUserCollectionCard({
            variables: {
              input: {
                userCardId: item.id,
                userCollectionId,
              },
            },
          }).catch(console.error)
        ),
      ])
        .then(() => setIsSaving(false))
        .then(() => navigate(`/showcases/${userCollectionId}`)),
    ],
    [selectedUserCards, userCollectionId, _createUserCollectionCard, navigate]
  );

  return (
    <ShowcaseCardAddModalView
      setCardModalOpen={setCardModalOpen}
      cardModalOpen={cardModalOpen}
      isSaving={isSaving}
      items={items}
      setItems={setItems}
      onSave={handleSave}
      onSelectUserCard={handleSelectUserCard}
      selectedUserCards={selectedUserCards}
      onRemoveUserCard={handleRemoveUserCard}
      searchRef={searchRef}
    />
  );
};

export default ShowcaseCardAddModalContainer;
