import "@brainhubeu/react-carousel/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Collector from "components/CollectorsToConnectWith/CollectorView.js";
import NextActive from "assets/svg/nav-arrows/next-active.svg";
import NextHover from "assets/svg/nav-arrows/next-hov.svg";
import NextInactive from "assets/svg/nav-arrows/next-inactive.svg";
import PrevActive from "assets/svg/nav-arrows/prev-active.svg";
import PrevHover from "assets/svg/nav-arrows/prev-hov.svg";
import PrevInctive from "assets/svg/nav-arrows/prev-inactive.svg";
import Slider from "react-slick";
import styles from "./CollectorsToConnectWithStyles";
import { useLocation } from "react-router-dom";

const CollectorsToConnectWithView = ({
  isMobile,
  collectorIds,
  collectors,
  displayName,
}) => {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (location.hash?.includes("collectors-to-connect-with")) {
      ref.current.scrollIntoView();
    }
  }, [location, ref]);

  // const collectors = [
  //   { userId: '001', username: 'sroskind', location: 'White Plains, NY', profileImgUrl: 'https://lcpgroup.com/wp-content/uploads/2019/09/Scott-Roskind-330x368.png' },
  //   { userId: '002', username: 'detkin', location: 'Albany, NY', profileImgUrl: '' },
  //   { userId: '003', username: 'dstern', location: 'Brooklyn, NY', profileImgUrl: '' },
  //   { userId: '001', username: 'sroskind', location: 'White Plains, NY', profileImgUrl: 'https://lcpgroup.com/wp-content/uploads/2019/09/Scott-Roskind-330x368.png' },
  //   { userId: '002', username: 'detkin', location: 'Albany, NY', profileImgUrl: '' },
  //   { userId: '003', username: 'dstern', location: 'Brooklyn, NY', profileImgUrl: '' },
  // ]
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
    centerPadding: "0px",
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerPadding: "45px",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mobileSliderSettings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!collectors) {
    return <></>;
  }
  if (!isMobile) {
    return (
      <div id="CollectorsToConnectWith">
        <Box ref={ref} container sx={styles.container}>
          <Box mb={3} sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="displayName">{displayName}</Typography>
          </Box>
          <Slider {...sliderSettings}>
            {collectors.map((collector, i) => (
              <Collector key={i} collector={collector} isMobile={false} />
            ))}
          </Slider>
        </Box>
      </div>
    );
  } else {
    return (
      <div id="CollectorsToConnectWith">
        <Box ref={ref} container sx={styles.container.mobile}>
          <Grid container p={1}>
            {collectors.map((collector, i) => (
              <Grid item xs={6} key={i * i}>
                <Collector key={i} collector={collector} isMobile={isMobile} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
};

export default CollectorsToConnectWithView;
