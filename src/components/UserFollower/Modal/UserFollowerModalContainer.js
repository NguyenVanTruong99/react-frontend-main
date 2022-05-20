import UserFollowerModalView from "./UserFollowerModalView";
import {
  listUserFollowers,
  listUserFollowing,
  listMyUserMutualFriends,
} from "../queries";
import { useQuery } from "@apollo/client";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useMemo, useContext } from "react";
import debounce from "lodash.debounce";
import { CurrentUserContext } from "contexts/CurrentUser";

const UserFollowerModalContainer = ({
  isOpen = false,
  currentTab,
  onTabChange,
  onClose,
  title,
  userId,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);

  const isSelf = currentUser?.authenticatable?.id === userId;

  const { data: followerData, loading: followerLoading } = useQuery(
    listUserFollowers,
    {
      variables: {
        userId: userId,
        query: "",
      },
    }
  );

  const { data: followingData, loading: followingLoading } = useQuery(
    listUserFollowing,
    {
      variables: {
        userId: userId,
        query: "",
      },
    }
  );

  const { data: mutualData, loading: mutualLoading } = useQuery(
    listMyUserMutualFriends,
    {
      skip: isSelf,
      variables: {
        userId: userId,
        query: "",
      },
    }
  );

  const handleRowClicked = (e, id) => {
    onClose();
    navigate(`/users/${id}`);
  };

  const handleClose = () => {
    onClose();
  };

  const followers = followerData?.listUserFollowers?.map(f => f.user) || [];
  const following =
    followingData?.listUserFollowing?.map(f => f.following) || [];
  const mutual =
    mutualData?.listMyUserMutualFriends?.map(f => f.following) || [];

  return (
    <UserFollowerModalView
      currentTab={currentTab}
      followers={followers}
      following={following}
      isLoading={followerLoading || followingLoading || mutualLoading}
      isOpen={isOpen}
      isSelf={isSelf}
      mutual={mutual}
      onClose={handleClose}
      onRowClicked={handleRowClicked}
      onTabChange={onTabChange}
      theme={theme}
      title={title}
    />
  );
};

export default UserFollowerModalContainer;
