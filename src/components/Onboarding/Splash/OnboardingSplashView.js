import styles from "./OnboardingSplashStyles";
import { Box, Typography } from "@mui/material";
import Logo from "components/Logo";
import OnboardingIndicator from "components/Onboarding/Indicator";
import OnboardingHeading from "components/Onboarding/Heading";
import OnboardingButton from "components/Onboarding/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const OnboardingSplashView = ({ onClickNext }) => (
  <>
    <Box sx={styles.outerBox}>
      <Box sx={styles.logoContainer}>
        <Logo />
      </Box>
      <OnboardingHeading
        heading="Welcome to NoXX!"
        subHeading="Customize your collecting experience in just 2 easy steps:"
      />
      <Typography sx={{ ...styles.text, ...styles.bullets }} variant="body1">
        Describe your experience
      </Typography>
      <Typography
        sx={{ ...styles.text, ...styles.bullets, ...{ marginBottom: 4 } }}
        variant="body1"
      >
        Add your interests
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <OnboardingButton selected onClick={onClickNext}>
          <ArrowRightAltIcon />
        </OnboardingButton>
        <OnboardingIndicator currentStep="splash" />
      </Box>
    </Box>
  </>
);

export default OnboardingSplashView;
