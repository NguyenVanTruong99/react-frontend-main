import styles from "./OnboardingInterestsStyles";
import OnboardingIndicator from "components/Onboarding/Indicator";
import OnboardingHeading from "components/Onboarding/Heading";
import { Autocomplete, Paper, Box, Typography, useTheme } from "@mui/material";
import OnboardingButton from "components/Onboarding/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import OnboardingButtonGroup from "components/Onboarding/Button/Group";
import TextField from "components/Form/TextField";

const AutocompletePaper = props => {
  const theme = useTheme();

  return (
    <Paper
      sx={{ border: 1, borderColor: theme.palette.grey.B800 }}
      elevation={8}
      {...props}
    />
  );
};

const OnboardingInterestsView = ({
  interestGroups,
  onClickNext,
  onInterestSelected,
  selectedInterests,
  showNext,
  // player dropdown
  playersValue,
  playerOptions,
  onPlayersInputChanged,
  onPlayersChanged,
}) => (
  <>
    <Box sx={styles.outerBox}>
      <Box sx={styles.logoContainer}>
        <OnboardingIndicator currentStep={"interests"} />
      </Box>
      <OnboardingHeading
        heading="One more thing! Tell us your interests."
        subHeading="This will help us curate NoXX specifically for you."
      />
      {interestGroups.map((grp, idx) =>
        grp.category !== "Players" ? (
          <Box sx={{ width: "100%", textAlign: "left" }} key={idx}>
            <Typography sx={{ marginBottom: 2 }}>{grp?.label}</Typography>
            <OnboardingButtonGroup
              choices={grp.interests.map(interest => interest.name)}
              onChoiceSelected={onInterestSelected}
              selectedChoices={selectedInterests
                .filter(interest => interest.category.name === grp.category)
                .map(interest => interest.name)}
            />
          </Box>
        ) : (
          <Box sx={{ width: "100%", textAlign: "left" }} key={idx}>
            <Typography sx={{ marginBottom: 2 }}>{grp?.label}</Typography>
            <Autocomplete
              multiple
              disablePortal
              filterSelectedOptions
              filterOptions={x => x}
              options={playerOptions}
              onChange={onPlayersChanged}
              onInputChange={onPlayersInputChanged}
              PaperComponent={AutocompletePaper}
              renderInput={params => (
                <TextField
                  sx={{ width: "100%", marginBottom: 2 }}
                  {...params}
                  placeholder="Type name here..."
                />
              )}
              value={playersValue}
            />
          </Box>
        )
      )}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {showNext ? (
          <OnboardingButton selected onClick={onClickNext}>
            <ArrowRightAltIcon />
          </OnboardingButton>
        ) : (
          <Typography>
            Make sure to go back and select at least one item.
          </Typography>
        )}
      </Box>
    </Box>
  </>
);

export default OnboardingInterestsView;
