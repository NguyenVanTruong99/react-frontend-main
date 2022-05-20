import { useMediaQuery, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import IdentityBarView from "./IdentityBarView";

const IdentityBarContainer = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const userIdentityDetails = {
    cards: user?.cardCount,
    compValue: user?.collectionValue,
    investment: user?.investment,
    collectorStatus: "",
    noxxTokens: "Coming Soon",
  };

  const handleClick = useCallback(() => 
    navigate("/add-cards")
  , [navigate])

  return (
    <IdentityBarView
      userIdentityDetails={userIdentityDetails}
      isMobile={isMobile}
      onClick={handleClick}
    />
  );
};

export default IdentityBarContainer;
