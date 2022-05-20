import { Box, Typography } from "@mui/material";
import InfoNotch from "assets/images/notches/info-notch.png";
import ShowcaseLogo from "assets/images/showcase_flex.png";
import style from "./ProfileInfoCardStyle";

const ProfileInfoCardView = ({ type, value }) => (
  <Box sx={style.infoCardBox}>
    <img src={InfoNotch} style={style.infoCardImg} alt="notch" />
    <Typography variant="h3" sx={style.infoValue}>
      {value}
    </Typography>
    <Box sx={style.showcaseValueBox}>
      {type === "followers" && (
        <Typography variant="caption" sx={style.infoLabel}>
          Followers
        </Typography>
      )}
      {type === "cards" && (
        <Typography variant="caption" sx={style.infoLabel}>
          Cards
        </Typography>
      )}
      {type === "showcases" && (
        <Typography variant="caption" sx={style.infoLabel}>
          Showcases
        </Typography>
      )}
    </Box>
  </Box>
);

export default ProfileInfoCardView;
