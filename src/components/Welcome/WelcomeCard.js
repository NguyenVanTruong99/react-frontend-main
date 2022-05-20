import { Box, Button, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import styles from "./WelcomeStyles";

const WelcomeCard = ({ isMobile, image, icon, title, linkText, link }) => {
  return image ? (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          ...styles.roundedBlack,
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        &nbsp;
      </Box>
    </Link>
  ) : (
    <>
      <Box sx={styles.roundedBlack}>
        <img src={icon} alt="showcase" style={{ maxWidth: "188px" }} />
        <Box pt={2}>
          <Typography variant="welcomeWhiteMd" py={3}>
            {title}
          </Typography>
          <Button variant="text" href={link}>
            {linkText}&nbsp;
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default WelcomeCard;
