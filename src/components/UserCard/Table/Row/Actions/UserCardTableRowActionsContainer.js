import { useCallback, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import UserCardTableRowActionsView from "./UserCardTableRowActionsView";
import { deleteUserCard } from "components/UserCard/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const UserCardTableRowActionsContainer = ({
  handleRefetch,
  item,
  handleModalOpen,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isShowcaseModalOpen, setIsShowcaseModalOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { userCard } = item;
  const [destroy] = useMutation(deleteUserCard);
  const [deleteCardOpen, setDeleteCardOpen] = useState(false);
  const handleDeleteCardOpen = useCallback(() => setDeleteCardOpen(true), []);
  const handleDeleteCardClose = useCallback(() => setDeleteCardOpen(false), []);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = event => {
    setAnchorEl(null);
  };

  const handleMenuClick = useCallback(
    (event, action) => {
      setAnchorEl(null);
      if (action === "edit-details") {
        navigate(`/collectors-cards/${userCard.id}/edit`);
      } else if (action === "share-card") {
        const url = window.location.origin + "/collectors-cards/" + userCard.id;
        if (navigator.share && isSmall) {
          navigator.share({
            title: "Share Card",
            url: url,
          });
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(url);
          handleModalOpen();
        }
      } else if (action === "add-showcase") {
        handleToggleShowcaseModal();
      }
    },
    [userCard.id, navigate, handleModalOpen]
  );

  const handleToggleShowcaseModal = () => {
    setIsShowcaseModalOpen(prev => !prev);
  };

  const handleSaveShowcases = () => {
    if (!!handleRefetch) handleRefetch();
  };

  const handleDeleteCardAction = useCallback(
    event => {
      setAnchorEl(null);
      handleDeleteCardClose();
      destroy({
        variables: {
          input: {
            id: userCard.id ?? "",
          },
        },
      })
        .then(() => {
          if (!!handleRefetch) handleRefetch();
        })
        .catch(e => console.log(e));
    },
    [setAnchorEl, handleDeleteCardClose, destroy, handleRefetch, userCard]
  );

  return (
    <UserCardTableRowActionsView
      handleMenuClick={handleMenuClick}
      handleMenuClose={handleMenuClose}
      handleMenuOpen={handleMenuOpen}
      isMenuOpen={isMenuOpen}
      isShowcaseModalOpen={isShowcaseModalOpen}
      handleSaveShowcases={handleSaveShowcases}
      handleToggleShowcaseModal={handleToggleShowcaseModal}
      menuAnchorEl={anchorEl}
      userCard={userCard}
      deleteCardOpen={deleteCardOpen}
      handleDeleteCardOpen={handleDeleteCardOpen}
      handleDeleteCardClose={handleDeleteCardClose}
      handleDeleteCardAction={handleDeleteCardAction}
    />
  );
};

export default UserCardTableRowActionsContainer;
