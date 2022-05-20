import { Box, Modal } from "@mui/material";
import styles from "./OnboardingLayoutStyles";
import { OnboardingProvider } from "contexts/Onboarding";
import BgGrey from "assets/images/backgrounds/grey background.svg";
import BgDark from "assets/images/backgrounds/noxx-bg-black.svg";
import { useLocation } from "react-router-dom";

const OnboardingLayoutView = ({ children, background }) => {
  const location = useLocation();
  const bg = location.pathname.endsWith("confirmation")
    ? `url(${BgGrey})`
    : `url(${BgDark})`;
  return (
    <Modal
      open={true}
      sx={{ background: bg, backgroundColor: "rgba(255,0,0,0.0)", backgroundSize: "cover" }}
    >
      <Box
        sx={{
          ...styles.container,
          ...(background === "dark" ? styles.dark : styles.light),
          ...{ outline: "none", border: "1px solid grey" },
        }}
      >
        <OnboardingProvider>{children}</OnboardingProvider>
      </Box>
    </Modal>
  );
};

export default OnboardingLayoutView;
