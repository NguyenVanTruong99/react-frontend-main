import { Box, IconButton, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/svg/noxx-logo.svg";
import styles from "./LogoStyles";

const LogoView = ({ isMobile }) => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <IconButton
      sx={styles.logoButton}
      edge="start"
      color="inherit"
      aria-label="menu"
      disableRipple
    >
      {isMobile ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Logo />
          </Box>
          <Typography variant="beta" sx={{ position: "absolute", top: 34 }}>
            BETA
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box>
            <Logo style={{ width: "90px", height: "45px" }} />
          </Box>
          <Typography
            variant="beta"
            sx={{ position: "relative", top: 4, left: 4 }}
          >
            BETA
          </Typography>
        </Box>
      )}
    </IconButton>
  </Link>
);

export default LogoView;
