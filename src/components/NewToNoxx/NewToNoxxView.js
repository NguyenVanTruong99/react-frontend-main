import "@brainhubeu/react-carousel/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewToNoxx.css";

import { Box, Typography } from "@mui/material";

import Card from "components/NewToNoxx/CardView.js";
import NextActive from "assets/svg/nav-arrows/next-active.svg";
import PrevActive from "assets/svg/nav-arrows/prev-active.svg";
import SectionBG from "assets/images/notches/section.png";
import Slider from "react-slick";
import styles from "./NewToNoxxStyles";

function NextArrow(props) {
  const { className, style, onClick } = props;
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
  infinite: false,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  initalSlide: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const NewToNoxxView = ({ isMobile, userCards, displayName, user }) =>
  !isMobile ? (
    <Box pb={1}>
      <Box>
        <img
          style={{
            position: "absolute",
            left: "0",
            width: "100vw",
            height: "660px",
            zIndex: "0",
          }}
          src={SectionBG}
          alt="bg"
        />
      </Box>
      <Box container sx={styles.container}>
        <Box
          mb={3}
          sx={{
            position: "relative",
            zIndex: "2",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="displayNameWhite">{displayName}</Typography>
        </Box>
        {!!userCards && userCards?.length > 0 && (
          <Slider {...sliderSettings}>
            {userCards
              .filter(userCard => userCard.card.hasImage === true)
              .map((userCard, i) => (
                <Card key={i} userCard={userCard} />
              ))}
          </Slider>
        )}
      </Box>
    </Box>
  ) : (
    <Box container sx={styles.container.mobile}>
      {!!userCards && userCards?.length > 0 && (
        <Slider
          {...sliderSettings}
          style={{ width: "99vw", position: "relative", left: "-10vw" }}
        >
          {!!userCards &&
            userCards
              .filter(userCard => userCard.card.hasImage === true)
              .map((userCard, i) => (
                <Card key={i} userCard={userCard} isMobile={true} />
              ))}
        </Slider>
      )}
    </Box>
  );

export default NewToNoxxView;
