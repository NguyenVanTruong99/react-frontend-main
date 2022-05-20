import { useMediaQuery, useTheme } from "@mui/material";

import OnboardingBarView from "./OnboardingBarView";
import { listMyShowcases } from "components/UserCollection/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const OnboardingBarContainer = ({ user }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function getStatus(completed) {
    let value = "";
    switch (completed) {
      case 0:
        value = "Let's get started";
        break;
      case 25:
        value = "Making moves";
        break;
      case 50:
        value = "Great progress";
        break;
      case 75:
        value = "Almost there!";
        break;
      default:
        value = "Great progress";
    }
    return value;
  }

  const { err, data: { listMyShowcases: myShowcases = [] } = {} } =
    useQuery(listMyShowcases);

  const showcaseCount = myShowcases.length ? myShowcases.length : 0;

  function calculatePercentCompleted(user) {
    let completed = 0;
    if (user?.profileImages.length > 0 && user.profile?.bio && user.username) {
      completed += 25;
    }
    if (user?.cardCount > 0) {
      completed += 25;
    }
    if (showcaseCount > 0) {
      completed += 25;
    }
    if (user?.followingCount > 0) {
      completed += 25;
    }
    return completed;
  }

  function calculateStep(user) {
    let step = 0;
    if (user?.profileImages.length > 0 && user.profile?.bio && user.username) {
      step = 1;
      if (user?.cardCount > 0) {
        step = 2;
        if (user?.followingCount > 0) {
          step = 3;
          if (showcaseCount > 0) {
            step = 4;
          }
        }
      }
    }

    return step;
  }

  const step = calculateStep(user);
  const userIdentityDetails = {
    cards: user?.cardCount,
    compValue: user?.collectionValue,
    investment: user?.investment,
    collectorStatus: "",
    noxxTokens: "Coming Soon",
    step: step,
    percentCompleted: calculatePercentCompleted(user),
    onboardingStatus: getStatus(calculatePercentCompleted(user)),
    showcases: showcaseCount,
  };

  return step === 4 ? (
    <></>
  ) : (
    <OnboardingBarView
      userIdentityDetails={userIdentityDetails}
      isMobile={isMobile}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default OnboardingBarContainer;
