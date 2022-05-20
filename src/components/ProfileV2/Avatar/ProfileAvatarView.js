import Box from "@mui/material/Box";
import OutlineNotch from "assets/images/notches/medium-transparent.png";

const ProfileAvatarView = ({ avatarUrl, sx, style, onClick }) =>
  <Box onClick={onClick} sx={{ ...style.avatarBox, ...sx?.container }}>
    <img src={OutlineNotch}
      style={{ ...style.profileFrame,  ...sx?.profileFrame }}
      alt="avatar frame"
    />
    <img src={avatarUrl}
      style={{ ...style.profileImg, ...sx?.profileImg }}
      alt="profile img"
    />
  </Box>
  
export default ProfileAvatarView;
  