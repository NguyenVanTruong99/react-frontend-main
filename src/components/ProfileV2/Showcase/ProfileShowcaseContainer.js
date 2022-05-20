import { useMemo } from "react";
import ProfileShowcaseView from "./ProfileShowcaseView";

const ProfileShowcaseContainer = ({
  isCurrentUser,
  isMedium,
  showcases,
  userId,
  viewMode,
}) => {
  const visibleShowcases = useMemo(
    () => showcases.filter(showcase => showcase.isVisible),
    [showcases]
  );
  return (
    <ProfileShowcaseView
      isCurrentUser={isCurrentUser}
      isMedium={isMedium}
      showcases={showcases}
      visibleShowcases={visibleShowcases}
      userId={userId}
      viewMode={viewMode}
    />
  );
};

export default ProfileShowcaseContainer;
