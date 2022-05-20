import * as React from "react";

import ProfileBoxView from "./ProfileBoxView";
import { getUser } from "components/User/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const ProfileBoxContainer = ({
  currentUser,
  theme,
  signOut,
  isMobile,
  handleMenuClose,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = currentUser.authenticatable.id;
  const { error, data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });

  !!error && console.error(error);

  const userProfile = user?.profile;

  return (
    <ProfileBoxView
      currentUser={currentUser}
      user={user}
      theme={theme}
      signOut={signOut}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      isMobile={isMobile}
      userProfile={userProfile}
      handleMenuClose={handleMenuClose}
    />
  );
};

export default ProfileBoxContainer;
