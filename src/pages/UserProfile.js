/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { CurrentUserContext } from "contexts/CurrentUser";
import EntryPage from "components/EntryPage";
import Profile from "components/Profile";
import ProfileV2 from "components/ProfileV2";
import { useContext } from "react";
import { useParams } from "react-router";

const UserProfilePage = () => {
  const { id } = useParams();
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser ? (
    process.env.NODE_ENV === "development" ||
    process.env.REACT_APP_ENVIRONMENT === "development" ||
    process.env.REACT_APP_ENVIRONMENT === "staging" ? (
      <ProfileV2 userId={id} isCurrentUser={false} />
    ) : (
      <Profile userId={id} isCurrentUser={false} />
    )
  ) : (
    <EntryPage />
  );
};

export default UserProfilePage;
