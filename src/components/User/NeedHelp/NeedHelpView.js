import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import LogoSmall from "assets/images/logo-small.png";
import { Typography } from "@mui/material";
import styles from "./NeedHelpStyles";
import theme from "theme.js";

const NeedHelpView = () => (
  <Box sx={styles.getHelp}>
    <img src={LogoSmall} alt="Logo small" />
    <Typography variant="placeholder" pl={1}>
      Need help?{" "}
      <a href="mailto:contact@getnoxx.com" style={{ color: theme.palette.text.primary }}>
        contact@getnoxx.com
      </a>
    </Typography>
  </Box>
);

export default NeedHelpView;
