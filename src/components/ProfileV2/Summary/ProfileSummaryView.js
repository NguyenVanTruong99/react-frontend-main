import ProfileSummaryFeatured from "./Featured";
import ProfileSummaryShowcaseSettings from "./ShowcaseSettings";

const ProfileSummaryView = ({
  isCurrentUser,
  isMedium,
  showcases,
  userId,
  viewMode,
}) => (
  <>
    {viewMode === "public" ? (
      <ProfileSummaryFeatured isMedium={isMedium} showcases={showcases} />
    ) : null}

    {viewMode === "private" && isCurrentUser ? (
      <ProfileSummaryShowcaseSettings
        isMedium={isMedium}
        showcases={showcases}
        userId={userId}
      />
    ) : null}
  </>
);

export default ProfileSummaryView;
