import { Box, Stack } from "@mui/material";
import BecauseYouLikeList from "./BecauseYouLikeList";
import ProfileBanner from "./Banner";
import ProfileButtonPanel from "./ButtonPanel";
import ProfileEdit from "./Edit";
import ProfileInfo from "./Info";
import ProfileNavbar from "./Navbar";
import ProfileShowcase from "./Showcase";
import ProfileSummary from "./Summary";
import ProfilePublicModeNotice from "./PublicModeNotice";
import YouMayKnowList from "./YouMayKnowList";
import style from "./ProfileStyle";

const ProfileView = ({
  isCurrentUser,
  isOwnProfile,
  isEditing,
  isSmall,
  isMedium,
  showcases,
  profileData,
  setIsEditing,
  setTab,
  setViewMode,
  tab,
  theme,
  userId,
  user,
  viewMode,
}) => (
  <>
    <Box sx={style.profileContainer}>
      <ProfilePublicModeNotice
        viewMode={viewMode}
        setViewMode={setViewMode}
        isCurrentUser={isCurrentUser}
      />
      <Box sx={style.profileBannerBox}>
        <ProfileBanner editView={false} user={user} />
      </Box>
      <Box sx={style.profileContentContainer}>
        <ProfileInfo
          isSmall={isSmall}
          showcases={showcases}
          profileData={profileData}
          user={user}
        />
        <ProfileButtonPanel
          isCurrentUser={isCurrentUser}
          isOwnProfile={isOwnProfile}
          isSmall={isSmall}
          setIsEditing={setIsEditing}
          setViewMode={setViewMode}
          viewMode={viewMode}
          userId={userId}
        />
        <Box sx={style.profileContentModules}>
          <ProfileNavbar isMedium={isMedium} tab={tab} setTab={setTab} />
          <Box sx={style.profileContentModulesMiddleContainer}>
            {tab === "Summary" && (
              <ProfileSummary
                isCurrentUser={isCurrentUser}
                isMedium={isMedium}
                showcases={showcases}
                userId={userId}
                viewMode={viewMode}
              />
            )}
            {tab === "Showcase" && (
              <ProfileShowcase
                isCurrentUser={isCurrentUser}
                isMedium={isMedium}
                showcases={showcases}
                userId={userId}
                viewMode={viewMode}
              />
            )}
          </Box>
          {!isMedium && isCurrentUser && (
            <Box sx={style.profileContentModulesRightContainer}>
              <Stack spacing={2}>
                <YouMayKnowList />
                <BecauseYouLikeList />
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
    <ProfileEdit
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      theme={theme}
      user={user}
      profileData={profileData}
    />
  </>
);

export default ProfileView;
