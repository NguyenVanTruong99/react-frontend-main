import "./slick.css";

import { Box, Button, Grid, Typography } from "@mui/material";

import AddCardsBlue from "assets/svg/icons/add_card_circle.svg";
import { DateTime } from "luxon";
import LicenseBar from "./LicenseBar.js";
import { Link } from "react-router-dom";
import OutlineNotch from "assets/images/notches/medium-transparent.png";
import PartyPopperEmoji from "assets/images/icons/party_popper.png";
import Slider from "react-slick";
import WelcomeCard from "./WelcomeCard.js";
import styles from "./WelcomeStyles";
import theme from "theme.js";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  customPaging: function (i) {
    return <a>&nbsp;&nbsp;&nbsp;</a>;
  },
};

const mobileSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: function (i) {
    return <a>&nbsp;&nbsp;&nbsp;</a>;
  },
};

function addCommas(x) {
  if (!!x) {
    return x
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return "0";
}
function formatAsCurrency(x) {
  return "$" + addCommas(x);
}
const abbreviateNumber = number => {
  if (number < 1000) return formatAsCurrency(number);
  if (number >= 1000 && number < 1000000) {
    return "$" + (number / 1000).toFixed(0);
  }
};

const formatDate = date => {
  return DateTime.fromISO(date).toFormat("MMM. yyyy");
};

const WelcomeView = ({
  welcomeCards,
  user,
  isMobile,
  profileImg,
  handleProfileClick,
}) => {
  return !isMobile ? (
    <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
      <Box sx={styles.justAdded}>
        <Box sx={{ position: "absolute", left: 76 }}>
          {!!user &&
            <Typography variant="welcomeBlackMd" py={3}>
              Hello, {user?.username}
            </Typography>
          }
        </Box>
        {/* <img src={BannerCard1} alt="bannercard" /> */}
        <Box>
          <Typography variant="welcomeHeader">
            <img
              src={PartyPopperEmoji}
              alt="emoji"
              style={{ height: "1em", position: "relative", top: 2 }}
            />{" "}
            Welcome to the NoXX Beta!
          </Typography>
          <Typography variant="welcomeHeader">
            Tell us about your experience at{" "}
            <a style={{ color: "#5E94E7" }} href="mailto:contact@getnoxx.com">
              contact@getnoxx.com
            </a>
          </Typography>
        </Box>
        {/* <img src={BannerCard2} alt="bannercard" /> */}
      </Box>

      <Box
        container
        sx={{
          ...styles.container,
          position: "relative",
          top: 35,
          marginLeft: "-16px",
          marginRight: "-16px",
        }}
      >
        <Slider {...sliderSettings} style={{ marginBottom: 64 }}>
          {welcomeCards.map((welcomeCard, i) => (
            <WelcomeCard
              key={i}
              image={welcomeCard.image}
              icon={welcomeCard.icon}
              title={welcomeCard.title}
              linkText={welcomeCard.linkText}
              link={welcomeCard.link}
            />
          ))}
        </Slider>
      </Box>
      {welcomeCards.length < 3 && (
        <Box sx={{ marginBottom: "40px" }}>&nbsp;</Box>
      )}
      <Box sx={styles.shadowDivider}>&nbsp;</Box>
      {!!user &&
        <LicenseBar user={user} profileImg={profileImg} formatDate={formatDate} isMobile={false} abbreviateNumber={abbreviateNumber} />
      }
      <Box sx={{ mb: (user ? "310px" : "90px") }} />
    </Box>
  ) : (
    <Box>
      <Box
        container
        sx={{ ...styles.container, marginLeft: "-36px", marginRight: "-36px", position: (user ? 'inherit' : 'relative'), top: (user ? 0 : -18) }}
      >
        <Slider {...mobileSliderSettings} style={{ marginBottom: 64 }}>
          {welcomeCards.map((welcomeCard, i) => (
            <WelcomeCard
              key={i}
              image={welcomeCard.image}
              icon={welcomeCard.icon}
              title={welcomeCard.title}
              linkText={welcomeCard.linkText}
              link={welcomeCard.link}
            />
          ))}
        </Slider>
      </Box>
      {welcomeCards.length < 3 && (
        <Box sx={{ marginBottom: "40px" }}>&nbsp;</Box>
      )}
      <Box sx={styles.section}>&nbsp;</Box>
      {!!user &&
        <LicenseBar user={user} profileImg={profileImg} formatDate={formatDate} isMobile={true} abbreviateNumber={abbreviateNumber} handleProfileClick={handleProfileClick} />
      }
      <Box sx={{ pb: 6 }} />
    </Box>
  );
};

export default WelcomeView;
