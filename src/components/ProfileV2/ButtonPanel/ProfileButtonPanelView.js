import { Box, Stack, Button, IconButton } from "@mui/material";
import style from "./ProfileButtonPanelStyle";
import ShareIcon from "assets/images/icons/profile-share.svg";
import ModalPrompt from "components/ModalPrompt";

const ProfileButtonPanelView = ({
  isCurrentUser,
  isOwnProfile,
  setIsEditing,
  setViewMode,
  viewMode,
  clipModalOpen,
  setClipModalOpen,
  onShare,
  onCopy,
}) => (
  <>
    <Box sx={style.profileButtonPanelContainer}>
      <Box sx={style.profileButtonPanelBox}>
        <Stack direction="row" spacing={1}>
          {isCurrentUser && viewMode === "private" && (
            <>
              <Button
                variant="outlined"
                sx={style.profileButtonEditButton}
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit Profile
              </Button>
              <Button
                variant="contained"
                sx={style.profileButtonEditButton}
                onClick={() => {
                  setViewMode("public");
                }}
              >
                View Public
              </Button>
              <IconButton
                sx={style.profileButtonIconButton}
                onClick={() => onShare()}
              >
                <img src={ShareIcon} alt="Share icon" />
              </IconButton>
            </>
          )}
          {!isCurrentUser && !isOwnProfile && (
            <>
              <Button variant="outlined" sx={style.profileButtonEditButton}>
                Follow
              </Button>
              <Button variant="contained" sx={style.profileButtonEditButton}>
                Message
              </Button>
              <IconButton
                sx={style.profileButtonIconButton}
                onClick={() => onShare()}
              >
                <img src={ShareIcon} alt="Share link" />
              </IconButton>
            </>
          )}
        </Stack>
      </Box>
    </Box>
    <ModalPrompt
      open={!!clipModalOpen}
      promptMessage="URL copied to your clipboard!"
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={() => {
        setClipModalOpen(false);
      }}
      handleAction={null}
    />
  </>
);

export default ProfileButtonPanelView;
