import { Box } from "@mui/system";
import CardAddNavStep from "./Step";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "components/Logo";
import RouteModalCloseButton from "components/RouteModal/CloseButton";
import styles from "./CardAddNavStyles";

const CardAddNavView = ({ onClose, currentStep }) => (
  <>
    <Box sx={styles.nav} component="nav">
      <Box ml={4}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>

      <Box sx={styles.stepWrapper}>
        <CardAddNavStep
          text="Upload your cards"
          stage={currentStep === 1 ? "active" : "completed"}
        />
        <Divider component="div" sx={styles.divider} />
        <CardAddNavStep
          text="Cards Recognized"
          stage={
            currentStep === 2
              ? "active"
              : currentStep === 3
              ? "completed"
              : "upcoming"
          }
        />
        <Divider component="div" sx={styles.divider} />
        <CardAddNavStep
          text="Fill Information"
          stage={currentStep === 3 ? "active" : "upcoming"}
        />
      </Box>

      <Box sx={styles.buttonWrapper}>
        <RouteModalCloseButton onClick={onClose} />
      </Box>
    </Box>
    <Box sx={{ height: 70 }} />
  </>
);

export default CardAddNavView;
