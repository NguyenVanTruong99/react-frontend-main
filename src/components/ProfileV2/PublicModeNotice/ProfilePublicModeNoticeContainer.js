import { useCallback } from "react";
import ProfilePublicModeNoticeView from "./ProfilePublicModeNoticeView";

const ProfilePublicModeNoticeContainer = ({
  isCurrentUser,
  viewMode,
  setViewMode,
}) => {
  const setViewModePrivate = useCallback(
    () => setViewMode("private"),
    [setViewMode]
  );

  return viewMode === "private" || !isCurrentUser ? null : (
    <ProfilePublicModeNoticeView setViewModePrivate={setViewModePrivate} />
  );
};

export default ProfilePublicModeNoticeContainer;
