import { useCallback, useContext, useState } from "react";

import { CurrentUserContext } from "contexts/CurrentUser";
import ShowcaseUserCardCardActionsButtonView from "./ShowcaseUserCardCardActionsButtonView";
import { deleteUserCollectionCard } from "components/UserCollectionCard/mutations";
import { getUserCollection } from "components/UserCollection/queries";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const ShowcaseUserCardCardActionsButtonContainer = ({ userCollectionCard }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const [removeCardOpen, setRemoveCardOpen] = useState(false);
  const handleRemoveCardOpen = useCallback(() => setRemoveCardOpen(true), []);
  const handleRemoveCardClose = useCallback(() => setRemoveCardOpen(false), []);

  const [destroy] = useMutation(deleteUserCollectionCard, {
    variables: {
      input: {
        id: userCollectionCard?.id,
      },
    },
    refetchQueries: [
      {
        query: getUserCollection,
        variables: {
          id: userCollectionCard?.userCollectionId,
        },
      },
    ],
  });

  const ownsCollection =
    currentUser?.authenticatable?.id === userCollectionCard?.userCard?.user?.id;

  const handleClick = useCallback(
    event => [event.stopPropagation(), setAnchorEl(event.currentTarget)],
    []
  );

  const handleClose = useCallback(
    event => [event?.stopPropagation?.(), setAnchorEl(null)],
    []
  );

  const handleDelete = useCallback(
    event => [
      event.stopPropagation(),
      destroy().catch(console.error).then(handleClose).finally(() => navigate(`/showcases/${userCollectionCard?.userCollectionId}`)),
    ],
    [handleClose, destroy]
  );

  return !ownsCollection ? null : (
    <ShowcaseUserCardCardActionsButtonView
      ownsCollection={ownsCollection}
      userCollectionCard={userCollectionCard}
      currentUser={currentUser}
      onClose={handleClose}
      isOpen={isOpen}
      onClick={handleClick}
      anchorEl={anchorEl}
      onRemove={handleDelete}
      showModal={showModal}
      onCancel={setShowModal.bind(null, false)}
      onDelete={handleDelete}
      removeCardOpen={removeCardOpen}
      handleRemoveCardOpen={handleRemoveCardOpen}
      handleRemoveCardClose={handleRemoveCardClose}
    />
  );
};

export default ShowcaseUserCardCardActionsButtonContainer;
