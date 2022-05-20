import "./ProfileBox.css";

import { Box, styled } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BellIcon from "assets/images/Notification.png";
import Divider from "@mui/material/Divider";
import { Link, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import OutlineNotch from "assets/images/notches/small.png";
import PlayerImg from "assets/images/Player.png";
import Typography from "@mui/material/Typography";
import styles from "./ProfileBoxStyles";

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: theme.palette.background.paper;
  -webkit-tap-highlight-color: transparent;
`;

const ProfileBoxView = ({
  currentUser,
  user,
  userProfile,
  theme,
  signOut,
  open,
  handleOpen,
  handleClose,
  isMobile,
  handleMenuClose,
}) => {
  const navigate = useNavigate();
  const profileImg =
    user?.approvedProfileImages.length > 0
      ? user?.approvedProfileImages[0]?.imageUrl
      : PlayerImg;

  //function to navigate to /profile
  const handleProfileClick = () => {
    navigate(`/profile`);
    handleMenuClose();
  };

  const size = isMobile ? 75 : 55;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: '1px solid grey',
          borderRadius: "8px",
          height: "45px",
          mt: "4px",
        }}
        // ml={5}
        className="profile-box"
      >
        {/* {!isMobile && <img src={BellIcon} alt="icon" />} */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "center",
            padding: theme.spacing(1),
            fontSize: "0.8rem",
          }}
          ml={1}
        >
          <Box
            sx={{
              overflow: "hidden",
              margin: "0",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleProfileClick}
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
              src={profileImg}
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
        </Box>
        <Box onClick={handleOpen}>
          {open ? (
            <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
          ) : (
            <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
          )}
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
      >
        <Box sx={isMobile ? styles.mobileModal : styles.modal}>
          <Box sx={styles.modal.popup}>
            <nav aria-label="main">
              <List disablePadding>
                <Link
                  to="/profile"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                  onClick={() => handleMenuClose()}
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={styles.modal.popup.button}>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary">
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemButton sx={styles.modal.popup.button}>
                    <Link
                      to="/edit-profile"
                      style={{
                        textDecoration: "none",
                        color: theme.palette.text.primary,
                      }}
                      onClick={() => handleMenuClose()}
                    >
                      <ListItemText primary="Account and Settings" />
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary">
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={styles.modal.popup.button}
                    onClick={() => signOut()}
                  >
                    <ListItemText primary="Sign Out" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          {/* <Button size={'large'} variant="contained" color="white" sx={styles.button} onClick={() => signOut()}>Sign Out</Button> */}
        </Box>
      </Modal>
    </>
  );
};

export default ProfileBoxView;
