import ProfileSummaryView from "./ProfileSummaryView";

const ProfileSummaryContainer = ({
  isCurrentUser,
  isMedium,
  showcases,
  userId,
  viewMode,
}) => {
  return (
    <ProfileSummaryView
      isCurrentUser={isCurrentUser}
      isMedium={isMedium}
      showcases={showcases}
      userId={userId}
      viewMode={viewMode}
    />
  );
};

export default ProfileSummaryContainer;
