import { Avatar, Box, Typography } from "@mui/material";
import styles from "./PlayerAvatarStyles";

const PlayerAvatarView = ({ playerHeadshotUrl, playerFullName, avatarSx }) => (
  <Box sx={styles.container}>
    <Box sx={{ ...styles.imageContainer, ...avatarSx }}>
      {playerHeadshotUrl ? (
        <Avatar src={playerHeadshotUrl} sx={{ ...styles.avatar }} />
      ) : (
        <Avatar src={playerHeadshotUrl} sx={{ ...styles.avatarMissing }} />
      )}
    </Box>
    <Typography sx={{ minWidth: {md: "auto", xs: "144px" } }}>{playerFullName}</Typography>
  </Box>
);

export default PlayerAvatarView;
