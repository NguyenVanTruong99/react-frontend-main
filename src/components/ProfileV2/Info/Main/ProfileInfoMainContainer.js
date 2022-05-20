import { useCallback, useState } from "react";
import ProfileInfoMainView from "./ProfileInfoMainView";
import { DateTime } from "luxon";

const ProfileInfoMainContainer = ({ user }) => {
  const username = user?.username;
  const memberSince = user?.createdAt
    ? "Member since " + DateTime.fromISO(user?.createdAt).toFormat("MMM yyyy")
    : null;
  const location = user?.profile?.location;
  const bio = user?.profile?.bio;

  return (
    <ProfileInfoMainView
      username={username}
      memberSince={memberSince}
      location={location}
      bio={bio}
    />
  );
};

export default ProfileInfoMainContainer;
