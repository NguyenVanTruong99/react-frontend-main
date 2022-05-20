import { Box, IconButton, Link, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "components/AppBar/NavLinks";
import ProfileBox from "components/AppBar/ProfileBox";

const MobileMenuView = ({ handleClose, currentUser, theme, signOut }) => (
  <Box
    sx={{ width: 250, height: "100%" }}
    role="presentation"
    // onClick={handleClose}
    // onKeyDown={handleClose}
  >
    <Box sx={{ height: "95%", position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: "18px",
          ml: "18px",
        }}
      >
        <IconButton onClick={handleClose}>
          <CloseIcon color="secondary" />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          ml: "1px",
          my: "24px",
        }}
      >
        <ProfileBox
          currentUser={currentUser}
          theme={theme}
          signOut={signOut}
          isMobile={true}
        />
      </Box>

      <NavLinks handleClose={handleClose} />

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "200px",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          mb: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            px: 4,
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#9fa2b4" }}>
            contact@getnoxx.com
          </Typography>
          <Link sx={{ textDecoration: "none" }} href="/terms-of-service">
            <Typography sx={{ fontSize: "12px", color: "#9fa2b4" }}>
              Terms of Service
            </Typography>
          </Link>
          <Link sx={{ textDecoration: "none" }} href="/privacy-policy">
            <Typography sx={{ fontSize: "12px", color: "#9fa2b4" }}>
              Privacy Policy
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            px: 4,
            mt: "48px",
          }}
        >
          <Typography sx={{ fontSize: "10px", color: "#9fa2b4" }}>
            &copy; NOXX Technologies Inc. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default MobileMenuView;
