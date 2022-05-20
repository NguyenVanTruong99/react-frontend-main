import { Box, Modal, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import style from "./ProfileEditStyle";
import ProfileEditTabs from "./Tabs";
import ProfileEditActions from "./Actions";
import ProfileEditBasic from "./Basic";
import ProfileEditSocial from "./Social";

const ProfileEditView = ({
  currentTab,
  onClose,
  open,
  profileData,
  setCurrentTab,
  user,
}) => (
  <Modal open={open} sx={style.editModal}>
    <Box sx={style.editContainer}>
      <Box sx={style.editContentBox}>
        <Box sx={style.headerBox}>
          <Typography variant="h6" sx={style.headerTitle}>
            Edit Profile
          </Typography>
          <IconButton onClick={onClose} sx={style.iconButton}>
            <CloseIcon sx={style.closeIcon} />
          </IconButton>
        </Box>
        <ProfileEditTabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        {currentTab === "Basic" && (
          <ProfileEditBasic user={user} onClose={onClose} />
        )}
        {currentTab === "Social" && (
          <ProfileEditSocial user={user} onClose={onClose} />
        )}
        {/* { 
          currentTab === "Advanced" &&
            <ProfileEditAdvanced
              profileData={profileData}
              user={user}
            />
        } */}
      </Box>
    </Box>
  </Modal>
);

export default ProfileEditView;
