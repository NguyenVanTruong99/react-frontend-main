import Box from "@mui/material/Box";
import style from "./ProfileInfoStyle";
import ProfileAvatar from "../Avatar/";
import ProfileInfoCard from "./Card/";
import ProfileInfoMain from "./Main";
import Bg from "assets/images/backgrounds/noxx-bg-sm.svg";

const ProfileInfoView = ({ isMedium, numShowcases, user }) => (
  <Box sx={style.profileInfoContainer}>
    <Box sx={style.profileInfoBox}>
      <Box sx={style.profileInfoBgBox}>
        <img src={Bg} style={style.profileInfoBg} alt="" />
      </Box>
      <Box sx={style.profileInfoContentBox}>
        <Box sx={style.profileInfoAvatarBox}>
          {isMedium ? (
            <ProfileAvatar length="72px" user={user} />
          ) : (
            <ProfileAvatar length="152px" user={user} />
          )}
        </Box>
        <Box sx={style.profileInfoCardBox}>
          <ProfileInfoCard
            value={user?.followerCount || 0}
            type={"followers"}
          />
          <ProfileInfoCard value={user?.cardCount || 0} type={"cards"} />
          <ProfileInfoCard value={numShowcases || 0} type={"showcases"} />
        </Box>
      </Box>
      <Box sx={style.profileInfoMainBox}>
        <ProfileInfoMain user={user} />
      </Box>
    </Box>
  </Box>
);

export default ProfileInfoView;
