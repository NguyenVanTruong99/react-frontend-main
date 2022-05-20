import { Box, Typography } from "@mui/material";
import style from "./ProfileInfoMainStyle";

const ProfileInfoView = ({ bio, location, memberSince, username, }) =>
  <>
    <Typography variant="h3" sx={ style.profileInfoUsername } >{username}</Typography>
    <Typography variant="subtitle1" sx={ style.profileInfoDate } >{memberSince}</Typography>
    <Typography variant="body2" sx={ style.profileInfoLocation } >{location}</Typography>
    <Typography variant="body1" sx={ style.profileInfoBio } >{bio}</Typography>
  </>

export default ProfileInfoView;
