import { Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import style from "./ProfilePublicModeNoticeStyle";

const ProfilePublicModeNoticeView = ({ setViewModePrivate }) => (
  <Box sx={style.profilePublicModeBox}>
    <Typography>Viewing Public Profile</Typography>
    <Box sx={style.profilePublicModeCloseBox} onClick={setViewModePrivate}>
      <Typography>Finished</Typography>
      <CloseIcon color="white" sx={{ height: 16 }} />
    </Box>
  </Box>
);

export default ProfilePublicModeNoticeView;
