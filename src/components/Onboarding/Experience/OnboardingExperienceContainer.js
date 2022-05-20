import { OnboardingContext } from "contexts/Onboarding";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingExperienceView from "./OnboardingExperienceView";

const OnboardingExperienceContainer = () => {
  const navigate = useNavigate();

  const { selectedExperienceLevel, setSelectedExperienceLevel } =
    useContext(OnboardingContext);

  const handleClickNext = () => {
    navigate("/onboarding/interests");
  };

  const handleExperienceLevelChanged = level => {
    setSelectedExperienceLevel(level);
  };

  return (
    <OnboardingExperienceView
      selectedExperienceLevel={selectedExperienceLevel}
      showNext={!!selectedExperienceLevel}
      onClickNext={handleClickNext}
      onExperienceLevelChanged={handleExperienceLevelChanged}
    />
  );
};

export default OnboardingExperienceContainer;
