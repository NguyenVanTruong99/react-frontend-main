import styles from "./OnboardingButtonGroupStyles";
import OnboardingButton from "components/Onboarding/Button";
import { Box, Typography } from "@mui/material";
import SportIcon from "components/Sport/Icon";
import { getDateLabelFromInterest } from "utils/getDateLabelFromInterest";

const OnboardingButtonGroupView = ({
  choices = [],
  onChoiceSelected,
  selectedChoices = [],
  sx,
}) => (
  <Box sx={{ ...styles.container, ...sx }}>
    {choices.map((choice, idx) => (
      <Box>
        <OnboardingButton
          key={idx}
          onClick={() => onChoiceSelected(choice)}
          selected={selectedChoices.includes(choice)}
          // awful but works -- if we have these three lucky buttons, remove margin below button
          sx={{
            ...styles.button,
            ...(["Modern", "Ultra Modern", "Vintage"].includes(choice)
              ? { marginBottom: 0 }
              : {}),
          }}
        >
          {choice}
          {/* // this logic shouldn't be here -- should be lifted up. yolo */}
          {["Basketball", "Football", "Soccer", "Baseball", "Hockey"].includes(
            choice
          ) ? (
            <SportIcon sx={{ marginLeft: 1 }} sportName={choice} />
          ) : null}
        </OnboardingButton>
        {/* // ditto -- shouldnt be here, lifted up */}
        {["Modern", "Ultra Modern", "Vintage"].includes(choice) ? (
          <Typography variant="bodyDekSm" sx={styles.dek}>
            {getDateLabelFromInterest(choice)}
          </Typography>
        ) : null}
      </Box>
    ))}
  </Box>
);

export default OnboardingButtonGroupView;
