import UserCardSummaryView from "./UserCardSummaryView";
import { getUserCard } from "../queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useTheme } from "@mui/material";

const UserCardSummaryContainer = ({ userCardId, isMobile }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const { data: { getUserCard: userCard } = {} } = useQuery(getUserCard, {
    skip: !userCardId,
    variables: {
      id: userCardId,
    },
  });

  const toggle = () => {
    open ? handleClose() : handleOpen();
  };

  return !userCard ? null : (
    <UserCardSummaryView
      userCard={userCard}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      toggle={toggle}
      isMobile={isMobile}
      theme={theme}
    />
  );
};

export default UserCardSummaryContainer;
