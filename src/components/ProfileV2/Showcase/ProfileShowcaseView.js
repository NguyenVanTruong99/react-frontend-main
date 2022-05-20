import ProfileShowcaseSettings from "./Settings";
import ProfileShowcaseStats from "./Stats";
import ProfileShowcaseList from "./List";

const ProfileShowcaseView = ({
  isCurrentUser,
  isMedium,
  showcases,
  visibleShowcases,
  userId,
  viewMode,
}) => (
  <>
    {viewMode === "private" && isCurrentUser && (
      <>
        <ProfileShowcaseStats isMedium={isMedium} showcases={showcases} />
        <ProfileShowcaseSettings
          isMedium={isMedium}
          showcases={showcases}
          userId={userId}
        />
      </>
    )}
    {viewMode === "public" && (
      <ProfileShowcaseList
        isMedium={isMedium}
        visibleShowcases={visibleShowcases}
      />
    )}
  </>
);

export default ProfileShowcaseView;
