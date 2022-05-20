import { CurrentUserContext } from "contexts/CurrentUser";
import EntryPage from "components/EntryPage";
import Profile from "components/Profile";
import ProfileV2 from "components/ProfileV2";
import { useContext } from "react";


const ProfilePage = (args) => {
  const { currentUser } = useContext(CurrentUserContext);
  return currentUser ? (
    process.env.NODE_ENV === "development" ||
    process.env.REACT_APP_ENVIRONMENT === "staging" ? (
      <ProfileV2
        userId={currentUser?.authenticatable?.id}
        isCurrentUser={true}
      />
    ) : (
      <Profile userId={currentUser?.authenticatable?.id} isCurrentUser={true} />
    )
  ) : (
    <EntryPage />
  );
};

export default ProfilePage;
