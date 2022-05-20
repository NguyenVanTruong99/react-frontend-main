import { useCallback, useState } from "react";
import ProfileEditActionsView from "./ProfileEditActionsView";

const ProfileEditActionsContainer = ({ isSaveEnabled, onSubmit, onClose }) => {
  return (
		<ProfileEditActionsView
      isSaveEnabled={isSaveEnabled}
      onClose={onClose}
      onSubmit={onSubmit}
		/>
  );
};

export default ProfileEditActionsContainer;
