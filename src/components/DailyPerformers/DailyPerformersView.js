import "@brainhubeu/react-carousel/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";

import NextActive from "assets/svg/nav-arrows/next-active.svg";
import Player from "./Player";
import PrevActive from "assets/svg/nav-arrows/prev-active.svg";
import Slider from "react-slick";
import styles from "./DailyPerformersStyles";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: "45%",

        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={NextActive} alt="prev-arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
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
  centerPadding: "0",
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerPadding: "45px",
        slidesToShow: 1.1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DailyPerformersView = ({ players, displayName, metadata }) => 
  <Box container sx={styles.container}>
    <Box
      mb={3}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        mt: { md: 5, xs: 0 },
        ml: { md: 0, xs: -2 },
      }}
    >
      <Typography variant="displayName">{displayName}</Typography>
    </Box>
    <Box
      sx={{
        display: {
          md: "block",
          xs: "none"
        }
      }}
    >
      <Slider {...sliderSettings}>
        {players.map((player, i) => (
          <Player key={i} player={player} metadata={metadata} />
        ))}
      </Slider>
    </Box>
    <Box
      sx={{
        display: {
          md: "none",
          xs: "flex"
        },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {players.map((player, i) => (
        <Player key={i} player={player} metadata={metadata} />
      ))}
    </Box>
  </Box>
      
export default DailyPerformersView;
