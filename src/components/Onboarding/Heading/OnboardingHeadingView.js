import styles from "./OnboardingHeadingStyles";
import { Typography } from "@mui/material";

const OnboardingHeadingView = ({ heading, subHeading, subHeadingSx = {} }) => (
  <>
    <Typography sx={{ ...styles.text, ...styles.heading }} variant="h4">
      {heading}
    </Typography>
    <Typography
      sx={{ ...styles.text, ...styles.subHeading, ...subHeadingSx }}
      variant="cardGreyLg"
    >
      {subHeading}
    </Typography>
  </>
);

export default OnboardingHeadingView;
