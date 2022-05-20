import { useNavigate } from "react-router-dom";
import OnboardingSplashView from "./OnboardingSplashView";

const OnboardingSplashContainer = () => {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/onboarding/experience");
  };

  return <OnboardingSplashView onClickNext={handleClickNext} />;
};

export default OnboardingSplashContainer;
