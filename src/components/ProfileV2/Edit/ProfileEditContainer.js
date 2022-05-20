import { useCallback, useState } from "react";
import ProfileEditView from "./ProfileEditView";

const ProfileEditContainer = ({ isEditing, profileData, setIsEditing, user }) => {
  const open = isEditing;
  const onClose = () => {setIsEditing(false)};
  const [currentTab, setCurrentTab] = useState("Basic");

  return (
		<ProfileEditView
      currentTab={currentTab}
      onClose={onClose}
      open={open}
      profileData={profileData}
      setCurrentTab={setCurrentTab}
      user={user}
		/>
  );
};

export default ProfileEditContainer;
