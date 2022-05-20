import { Box } from "@mui/material";
import OutlineNotch from "assets/images/notches/small.png";
import PlayerImg from "assets/images/Player.png";


const UserAvatarView = ({
  onImageClick, 
  profileImg, 
  size=55
}) => 
  <Box
    sx={{
      overflow: "hidden",
      cursor: "pointer",
    }}
    onClick={onImageClick}
  >
    <img
      src={OutlineNotch}
      style={{
        position: "absolute",
        width: size,
        height: size,
        zIndex: 2,
      }}
      alt="profile img"
    />
    <img
      src={profileImg ?? PlayerImg}
      style={{
        position: "relative",
        height: size - 3,
        width: size - 3,
        border: "1px solid white",
        objectFit: "cover",
        zIndex: 1,
        margin: "auto",
      }}
      alt="profile img"
    />
  </Box>

  export default UserAvatarView