import "./OnboardingBar.css";
import "@brainhubeu/react-carousel/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Grid, Typography } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Carousel from "@brainhubeu/react-carousel";
import { HashLink } from "react-router-hash-link";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import NextActive from "assets/svg/nav-arrows/next-active.svg";
import NextHover from "assets/svg/nav-arrows/next-hov.svg";
import NextInactive from "assets/svg/nav-arrows/next-inactive.svg";
import NoxxPattern from "assets/images/noxx-pattern.png";
import PrevActive from "assets/svg/nav-arrows/prev-active.svg";
import PrevHover from "assets/svg/nav-arrows/prev-hov.svg";
import PrevInctive from "assets/svg/nav-arrows/prev-inactive.svg";
import Slider from "react-slick";
import styles from "./OnboardingBarStyles";
import theme from "theme";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: "45%",
        right: "-10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={NextActive} alt="prev-arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: "45%",

        cursor: "pointer",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <img src={PrevActive} alt="prev-arrow" />
    </div>
  );
}
const sliderSettings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const mobileSliderSettings = {
  className: "center",
  centerMode: true,
  centerPadding: "40px",
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnFocus: true,
};

const OnboardingBarView = ({
  userIdentityDetails,
  isMobile,
  open,
  handleOpen,
  handleClose,
}) => {
  var items = [
    {
      name: "Update Bio + Username + Avatar",
      description:
        "Adding your profile picture, username, and bio will help other members understand who you are.",
      button: (
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button
            variant="outlinedBlack"
            color="primary"
            style={{ margin: "0 auto", padding: "8px 24px" }}
          >
            Complete Your Profile
          </Button>
        </Link>
      ),
    },
    {
      name: "Add Cards to My Collection",
      description:
        "Adding cards will help other members understand which cards are in your collection.",
      button: (
        <Link to="/add-cards" style={{ textDecoration: "none" }}>
          <Button
            variant="outlinedBlack"
            color="primary"
            style={{ margin: "0 auto", padding: "8px 24px" }}
          >
            Add Cards
          </Button>
        </Link>
      ),
    },
    {
      name: "Connect with Other Collectors",
      description:
        "Follow another collector to see their cards and collection.",
      button: (
        <HashLink
          to="/#CollectorsToConnectWith"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outlinedBlack"
            color="primary"
            style={{ margin: "0 auto", padding: "8px 24px" }}
          >
            Connect
          </Button>
        </HashLink>
      ),
    },
    {
      name: "Create a Showcase",
      description: "Create a showcase to show off your collection.",
      button: (
        <Link to="/my-showcases" style={{ textDecoration: "none" }}>
          <Button
            variant="outlinedBlack"
            color="primary"
            style={{ margin: "0 auto", padding: "8px 24px" }}
          >
            Create a Showcase
          </Button>
        </Link>
      ),
    },
  ];

  let nextStep = {};
  if (userIdentityDetails.step === 0) {
    nextStep = items[0];
  } else if (userIdentityDetails.step === 1) {
    nextStep = items[1];
  } else if (userIdentityDetails.step === 2) {
    nextStep = items[2];
  } else if (userIdentityDetails.step === 3) {
    nextStep = items[3];
  } else {
    nextStep = items[0];
  }

  function Item(props) {
    return (
      <Box sx={{ textAlign: "left" }} key={props.item}>
        <h4>TIP:&nbsp;&nbsp;{props.item.name}</h4>
        <p>{props.item.description}</p>
      </Box>
    );
  }

  function MobileItem(props) {
    return (
      <Box key={props.item}>
        <Card
          variant="outlined"
          sx={{
            height: "220px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent sx={{ fontSize: "0.75rem" }}>
            <h4>TIP:&nbsp;&nbsp;{props.item.name}</h4>
            <p>{props.item.description}</p>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "center", margin: "8px" }}
          >
            <Button
              size="small"
              disableElevation
              variant="contained"
              sx={{
                width: "100%",
                fontSize: "0.8rem",
                textWrap: "nowrap",
                backgroundColor: theme.palette.blue.main,
                color: "white",
                borderColor: theme.palette.blue.main,
              }}
            >
              {props.item.name}
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }

  const toggle = () => {
    open ? handleClose() : handleOpen();
  };
  return (
    <Box sx={{ mb: { sm: 0 } }}>
      <Grid container sx={open ? styles.container.open : styles.container}>
        <Grid item xs={12} sm={2} md={2} sx={styles.box.boxes.left}>
          <Box sx={styles.box.left}>
            <Box
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  fontSize: "0.8em",
                  fontWeight: "600",
                  color: theme.palette.grey.B500,
                }}
              >
                Profile Completion
              </Box>
              <Box sx={styles.box.lower.success}>
                {userIdentityDetails.percentCompleted}%
              </Box>
            </Box>
            <img
              src={NoxxPattern}
              alt="Noxx"
              style={{
                width: "110%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(50%)",
                zIndex: "1",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={7} sx={styles.box.status}>
          <Box sx={{ fontSize: "0.9rem", color: "#757470" }}>
            <Typography variant="cardGreyLg">Next Step:</Typography>
            <Typography variant="cardLg">{nextStep.name}</Typography>
          </Box>
          <Box sx={{ width: "80%" }}>
            <LinearProgress
              color="success"
              variant="determinate"
              value={userIdentityDetails.percentCompleted}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} sx={styles.box.right}>
          {nextStep.button}
        </Grid>
      </Grid>
    </Box>
  );
};
export default OnboardingBarView;
