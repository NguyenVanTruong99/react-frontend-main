import { useState } from "react";
import { useQuery } from "@apollo/client";

import ProfileView from "./ProfileView";
import { getUser } from "components/User/queries";
import { getUserProfile } from "components/UserProfile/queries";
import {
  listShowcasesByUserId,
  listShowcasesByUserIdVisible,
} from "components/UserCollection/queries";
import { useMediaQuery, useTheme } from "@mui/material";

const ProfileContainer = ({ userId, isCurrentUser, isOwnProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState(
    isCurrentUser ? "private" : "public"
  ); //modes: "private" and "public"
  const [tab, setTab] = useState("Summary");
  const [showcaseQuery, showcaseQueryString] = isCurrentUser
    ? [listShowcasesByUserId, "listShowcasesByUserId"]
    : [listShowcasesByUserIdVisible, "listShowcasesByUserIdVisible"];

  const { error, data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });
  const { data: profileData } = useQuery(getUserProfile, {
    skip: !user?.profile?.id,
    variables: {
      id: user?.profile?.id,
    },
  });
  !!error && console.error(error);

  const { data: { [showcaseQueryString]: myShowcases = [] } = {} } = useQuery(
    showcaseQuery,
    {
      variables: {
        userId,
      },
    }
  );

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ProfileView
      isCurrentUser={isCurrentUser}
      isOwnProfile={isOwnProfile}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      viewMode={viewMode}
      setViewMode={setViewMode}
      tab={tab}
      setTab={setTab}
      userId={userId}
      user={user}
      profileData={profileData}
      showcases={myShowcases}
      theme={theme}
      isSmall={isSmall}
      isMedium={isMedium}
    />
  );
};

export default ProfileContainer;
