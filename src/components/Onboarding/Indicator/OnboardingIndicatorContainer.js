import OnboardingIndicatorView from "./OnboardingIndicatorView";

const OnboardingIndicatorContainer = ({ currentStep }) => {
  return (
    <OnboardingIndicatorView
      currentStep={currentStep}
      steps={["splash", "experience", "interests"]}
    />
  );
};

export default OnboardingIndicatorContainer;
