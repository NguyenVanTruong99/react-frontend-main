import { useNavigate } from "react-router-dom";
import OnboardingConfirmationView from "./OnboardingConfirmationView";

const OnboardingConfirmationContainer = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/");
  };

  return <OnboardingConfirmationView onGetStarted={handleGetStarted} />;
};

export default OnboardingConfirmationContainer;
