import CardAddNavView from "./CardAddNavView";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const CardAddNavContainer = ({ currentStep }) => {
  const navigate = useNavigate();
  const handleClose = useCallback(
    () => navigate("/my-collection", { replace: true }),
    [navigate]
  );

  return <CardAddNavView onClose={handleClose} currentStep={currentStep} />;
};

export default CardAddNavContainer;
