import OnboardingHeading from "components/Onboarding/Heading";
import styles from "./OnboardingConfirmationStyles";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import BgTop from "assets/images/onboarding/NoXX-Pattern-tl.png";
import BgBottom from "assets/images/onboarding/NoXX-Pattern-br.png";
import NoxxLogo from "assets/images/logos/noxx-logo.png";
import Image1 from "assets/images/onboarding/Onboarding-Add-Cards.png";
import Image2 from "assets/images/onboarding/Onboarding-Add-Friends.png";
import Image3 from "assets/images/onboarding/Onboarding-Showcase.png";

const OnboardingConfirmationView = ({ onGetStarted }) => (
  <>
    <Box sx={styles.container}>
      <img style={styles.bgTop} src={BgTop} alt="" draggable={false} />
      <img style={styles.bgBottom} src={BgBottom} alt="" draggable={false} />
      <Box sx={styles.paddingBox}>
        <img style={styles.noxxLogo} src={NoxxLogo} alt="" draggable={false} />
        <Typography variant="h2" sx={styles.header}>
          You're Set
        </Typography>
        <Typography variant="body1" sx={styles.subheader}>
          NoXX is a platform made for collectors by collectors. Discover some of
          these great features to get started:
        </Typography>
        <Box sx={styles.bodyContainer}>
          <Box sx={styles.section1}>
            <Box sx={styles.imageBox}>
              <img
                style={styles.image}
                src={Image1}
                alt=""
                draggable={false}
              ></img>
            </Box>
            <Box sx={styles.sectionText}>
              <Typography variant="h6">Add Cards</Typography>
              <Typography variant="body2" sx={styles.sectionTextParagraph}>
                Add all your favorite cards to NoXX and track their value, build
                Showcases and more
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.section2}>
            <Box sx={styles.imageBox}>
              <img
                style={styles.image}
                src={Image2}
                alt=""
                draggable={false}
              ></img>
            </Box>
            <Box sx={styles.sectionText}>
              <Typography variant="h6">Connect</Typography>
              <Typography variant="body2" sx={styles.sectionTextParagraph}>
                Connect with other collectors, follow their collections and
                build your network
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.section3}>
            <Box sx={styles.imageBox}>
              <img
                style={styles.image}
                src={Image3}
                alt=""
                draggable={false}
              ></img>
            </Box>
            <Box style={styles.sectionText}>
              <Typography variant="h6">Showcase</Typography>
              <Typography variant="body2" sx={styles.sectionTextParagraph}>
                Have a great series of cards? Or just like rookies from 2018? Go
                ahead create Showcases to share with your followers or friends
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.buttonBox}>
          <Button
            onClick={onGetStarted}
            variant="contained"
            sx={styles.confirmButton}
            selected
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  </>
);

export default OnboardingConfirmationView;
