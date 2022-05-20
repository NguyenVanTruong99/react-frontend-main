import { Box } from "@mui/material";
import PlayerImg from "assets/images/Player.png";
import OutlineNotch from "assets/images/notches/small.png";

const UserAvatarView = ({ length, sx, user, userImageUrl}) => {
	const avatarUrl = userImageUrl ? userImageUrl : 
    user?.approvedProfileImages?.length > 0 ? user?.approvedProfileImages[0]?.imageUrl : PlayerImg;

  return (
    <Box sx={{ ...{ position: "relative", overflow: "hidden", margin: "0", width: length, height: length, minWidth: length }, ...sx?.container }}>
      <img src={OutlineNotch}
        style={{ ...{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 2,
        }, ...sx?.profileFrame }}
        alt="avatar frame"
      />
      <img src={avatarUrl}
        style={{ ...{
          position: "relative",
          height: "73.33%",
          width: "73.33%",
          objectFit: "cover",
          zIndex: 1,
          margin: "auto",
          left: "15%",
          top: "-99%"
        }, ...sx?.profileImg }}
        alt="profile img"
        />
    </Box>
  );
};

export default UserAvatarView;
