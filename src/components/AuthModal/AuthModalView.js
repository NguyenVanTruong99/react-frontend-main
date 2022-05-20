import "./AuthModal.css";

import AuthNav from "./AuthNav";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Logo from "components/Logo";
import NoXXBGG from "assets/images/background-gradiant.png";
import { styled } from "@mui/material/styles";
import styles from "./AuthModalStyles";

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.white,
}));

const LinkSpacer = styled("span")(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 1),
}));
const RouteModalView = ({ children }) => (
  <Box sx={styles.background}>
    <Box sx={styles.container}>
      <Box sx={styles.logoContainer}>
        <Link to="/">
          <Logo color="white" style={{ position: "absolute", bottom: 0 }} />
        </Link>
      </Box>
      <Box sx={styles.contentContainer}>
        <AuthNav selected={window.location.pathname} />
        {children}
      </Box>
      <Box sx={styles.linksContainer}>
        <StyledLink to="/terms-of-service">Terms of Service</StyledLink>
        <LinkSpacer>&bull;</LinkSpacer>
        <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
      </Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        position: "fixed",
        bottom: 0,
        right: 0,
        marginTop: "-100vh",
        zIndex: -1,
        minHeight: "100%",
        width: "100%",
      }}
    >
      <img src={NoXXBGG} alt="NoXXBG" />
    </Box>
  </Box>
);

export default RouteModalView;
