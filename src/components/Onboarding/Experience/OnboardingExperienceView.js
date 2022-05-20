import styles from "./OnboardingExperienceStyles";
import OnboardingIndicator from "components/Onboarding/Indicator";
import OnboardingHeading from "components/Onboarding/Heading";
import { Box } from "@mui/material";
import OnboardingButton from "components/Onboarding/Button";
import OnboardingButtonGroup from "components/Onboarding/Button/Group";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const OnboardingExperienceView = ({
  onClickNext,
  onExperienceLevelChanged,
  selectedExperienceLevel,
  showNext,
}) => (
  <>
    <Box sx={styles.outerBox}>
      <Box sx={styles.logoContainer}>
        <OnboardingIndicator currentStep={"experience"} />
      </Box>
      <OnboardingHeading
        heading="How would you describe yourself?"
        subHeading="Tell us something. This will help us choose something"
      />
      <OnboardingButtonGroup
        choices={[
          "New to collecting",
          "Collecting for a bit",
          "Collecting my whole life",
        ]}
        selectedChoices={[selectedExperienceLevel]}
        onChoiceSelected={onExperienceLevelChanged}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {showNext && (
          <OnboardingButton onClick={onClickNext} selected>
            <ArrowRightAltIcon />
          </OnboardingButton>
        )}
      </Box>
    </Box>
  </>
);

export default OnboardingExperienceView;
