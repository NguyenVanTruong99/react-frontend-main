import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { useTheme, useMediaQuery } from "@mui/material";
import UserSearchTableRowActionsView from "./UserSearchTableRowActionsView";

const UserSearchTableRowActionsContainer = ({ handleRefetch, item, handleModalOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const { user } = item;
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = event => {
    setAnchorEl(null);
  };

  const handleMenuClick = useCallback(
    (event, action) => {
      setAnchorEl(null);
      if (action === "share-user") {
        const url = window.location.origin + "/users/" + item.id;
        if (navigator.share && isSmall) {
          navigator
            .share({
              title: "Share Collector",
              url: url,
            })
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(url);
          handleModalOpen();
        }
      }
    },
    [item, navigate, handleModalOpen]
  );


  return (
    <UserSearchTableRowActionsView
      handleMenuClick={handleMenuClick}
      handleMenuClose={handleMenuClose}
      handleMenuOpen={handleMenuOpen}
      isMenuOpen={isMenuOpen}
      menuAnchorEl={anchorEl}
      user={user}
    />
  );
};

export default UserSearchTableRowActionsContainer;
