import { useContext, useEffect } from "react";
import { CurrentUserContext } from "contexts/CurrentUser";
import OnboardingLayoutView from "./OnboardingLayoutView";
import { useLocation, useNavigate } from "react-router-dom";

const OnboardingLayoutContainer = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(CurrentUserContext);
  const isOnConfirmation = location.pathname === "/onboarding/confirmation";

  useEffect(() => {
    if (!currentUser) {
      return navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <OnboardingLayoutView
      children={children}
      background={isOnConfirmation ? "dark" : "light"}
    />
  );
};

export default OnboardingLayoutContainer;
