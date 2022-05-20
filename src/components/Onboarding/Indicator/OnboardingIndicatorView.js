import styles from "./OnboardingIndicatorStyles";
import { Box, Button } from "@mui/material";

const OnboardingIndicatorView = ({ currentStep, steps }) => (
  <Box sx={styles.container}>
    {steps.map((step, idx) => (
      <Box key={idx} sx={styles.dot}>
        {currentStep === step ? (
          <Box component="span" sx={styles.selectedDot} />
        ) : null}
      </Box>
    ))}
  </Box>
);

export default OnboardingIndicatorView;
