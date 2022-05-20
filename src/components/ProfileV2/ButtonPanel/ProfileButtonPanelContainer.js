import { useState, useCallback } from "react";
import ProfileButtonPanelView from "./ProfileButtonPanelView";

const ProfileButtonPanelContainer = ({
  isCurrentUser,
  isOwnProfile,
  isSmall,
  setIsEditing,
  setViewMode,
  viewMode,
  userId,
}) => {
  const [clipModalOpen, setClipModalOpen] = useState(false);
  const onShare = useCallback(() => {
    const url = `${window.location.protocol}//${window.location.host}/users/${userId}`;
    if (navigator.share && isSmall) {
      navigator.share({
        title: "Share Card",
        url: url,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setClipModalOpen(true);
    }
  }, [isSmall, userId]);
  const onCopy = useCallback(() => {
    const url = `${window.location.protocol}//${window.location.host}/users/${userId}`;
    navigator.clipboard.writeText(url);
    setClipModalOpen(true);
  }, [userId]);

  return (
    <ProfileButtonPanelView
      isCurrentUser={isCurrentUser}
      isOwnProfile={isOwnProfile}
      setIsEditing={setIsEditing}
      setViewMode={setViewMode}
      viewMode={viewMode}
      clipModalOpen={clipModalOpen}
      setClipModalOpen={setClipModalOpen}
      onShare={onShare}
      onCopy={onCopy}
    />
  );
};

export default ProfileButtonPanelContainer;
