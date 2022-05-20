import {
  getUserCollection,
  listMyShowcases,
  listShowcasesByUserId,
  listShowcasesIFollow,
} from "components/UserCollection/queries";
import { useCallback, useContext, useState, useMemo } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { CurrentUserContext } from "contexts/CurrentUser";
import ShowcaseCardActionsButtonView from "./ShowcaseCardActionsButtonView";
import { deleteUserCollection } from "components/UserCollection/mutations";
import { deleteUserCollectionFollower } from "components/UserCollectionFollower/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const ShowcaseCardActionsButtonContainer = ({ showcase, sx, color, size }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const [deleteShowcaseOpen, setDeleteShowcaseOpen] = useState(false);
  const handleDeleteShowcaseOpen = useCallback(
    () => setDeleteShowcaseOpen(true),
    []
  );
  const handleDeleteShowcaseClose = useCallback(
    e => [e?.stopPropagation?.(), setDeleteShowcaseOpen(false)],
    []
  );
  const [addClipOpen, setAddClipOpen] = useState(false);
  const handleAddClipOpen = useCallback(() => setAddClipOpen(true), []);
  const handleAddClipClose = useCallback(
    e => [e.stopPropagation(), setAddClipOpen(false)],
    []
  );
  const [unfollowOpen, setUnfollowOpen] = useState(false);
  const handleUnfollowOpen = useCallback(() => [setUnfollowOpen(true)], []);
  const handleUnfollowClose = useCallback(() => [setUnfollowOpen(false)], []);
  const ownerId = showcase?.userId;
  const handleAddCardsClick = useCallback(
    event => [event.stopPropagation(), setCardModalOpen(true)],
    []
  );

  const [deleteShowcase] = useMutation(deleteUserCollection, {
    variables: {
      input: {
        id: showcase?.id,
      },
    },
  });

  const [destroy] = useMutation(deleteUserCollectionFollower, {
    variables: {
      input: {
        userCollectionId: showcase?.id,
      },
    },
    refetchQueries: [
      {
        query: getUserCollection,
        variables: {
          id: showcase?.id,
        },
      },
      {
        query: listShowcasesIFollow,
      },
    ],
  });

  const handleViewProfile = useCallback(
    event => [event?.stopPropagation?.(), navigate(`/users/${ownerId}`)],
    [ownerId, navigate]
  );

  const handleUnFollow = useCallback(
    event => [event?.stopPropagation?.(), destroy(), handleUnfollowClose()],
    [destroy, handleUnfollowClose]
  );

  const handleClick = useCallback(
    event => [event.stopPropagation(), setAnchorEl(event.currentTarget)],
    []
  );

  const handleEdit = useCallback(
    event => [event.stopPropagation(), setShowModal(true)],
    []
  );

  const handleClose = useCallback(
    event => [event?.stopPropagation?.(), setAnchorEl(null)],
    []
  );

  const handleNullClick = useCallback(event => [event.stopPropagation()], []);

  const deleteShowcaseAction = useCallback(
    event => {
      event.stopPropagation();
      handleDeleteShowcaseClose();
      deleteShowcase().then(setTimeout(() => navigate(`/my-showcases`), 1000));
    },
    [handleDeleteShowcaseClose, deleteShowcase]
  );

  const handleDelete = useCallback(
    event => [event.stopPropagation(), setDeleteShowcaseOpen(true)],
    []
  );

  const handleShare = useCallback(
    event => {
      event.stopPropagation();
      const url = `${window.location.protocol}//${window.location.host}/showcases/${showcase.id}`;
      if (navigator.share && isSmall) {
        navigator.share({
          title: "Share Card",
          url: url,
        });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        handleAddClipOpen();
      }
      handleClose();
    },
    [showcase, handleClose, handleAddClipOpen]
  );

  const isFollowing = useMemo(
    () =>
      showcase?.userCollectionFollowers.some(
        userCollectionFollower =>
          userCollectionFollower.userId === currentUser?.authenticatable.id
      ),
    [showcase, currentUser]
  );

  return (
    <ShowcaseCardActionsButtonView
      currentUser={currentUser}
      showcase={showcase}
      isFollowing={isFollowing}
      onClose={handleClose}
      isOpen={isOpen}
      onClick={handleClick}
      anchorEl={anchorEl}
      onDelete={handleDelete}
      onShare={handleShare}
      onEdit={handleEdit}
      onViewProfile={handleViewProfile}
      showModal={showModal}
      onUnFollow={handleUnFollow}
      onCancel={setShowModal.bind(null, false)}
      sx={sx}
      color={color}
      setCardModalOpen={setCardModalOpen}
      cardModalOpen={cardModalOpen}
      userCollectionId={showcase?.id}
      onAddCardsClick={handleAddCardsClick}
      deleteShowcaseOpen={deleteShowcaseOpen}
      handleDeleteShowcaseClose={handleDeleteShowcaseClose}
      deleteShowcaseAction={deleteShowcaseAction}
      size={size}
      addClipOpen={addClipOpen}
      handleAddClipClose={handleAddClipClose}
      unfollowOpen={unfollowOpen}
      handleUnfollowOpen={handleUnfollowOpen}
      handleUnfollowClose={handleUnfollowClose}
      handleNullClick={handleNullClick}
    />
  );
};

export default ShowcaseCardActionsButtonContainer;
