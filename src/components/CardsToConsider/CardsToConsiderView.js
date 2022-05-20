import "@brainhubeu/react-carousel/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";

import Card from "components/CardsToConsider/CardView";
import LoginModal from "components/LoginModal";
import ModalPrompt from "components/ModalPrompt";
import NextActive from "assets/svg/nav-arrows/next-active.svg";
import PrevActive from "assets/svg/nav-arrows/prev-active.svg";
import Slider from "react-slick";
import styles from "./CardsToConsiderStyles";

const CardsToConsiderView = ({ isMobile, cards, displayName, loginOpen, handleLoginClose, redirectTo, handleOpenLogin, currentUser }) => {
  const [, updateState] = useState();
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

  const infinite = cards.length > 5;
  const sliderSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "center",
    centerMode: false,
    centerPadding: "0",
    dots: false,
    arrows: true,
    infinite: infinite,
    speed: 500,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1246,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "45px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const forceUpdate = useCallback(() => updateState({}), []);
  const [key, setKey] = useState(1);
  const [alreadyAddedCards, setAlreadyAddedCards] = useState([]);
  const handleChildClick = cardId => {
    const index = cards.findIndex(card => card.id === cardId);
    if (index > -1) {
      cards.splice(index, 1);
    }
    setAlreadyAddedCards([...alreadyAddedCards, cardId]);
    setKey(key + 1);
    forceUpdate();
  };
  const [modalAddConfirmOpen, setModalAddConfirmOpen] = useState(false);
  const handleModalAddConfirmOpen = useCallback(
    () => setModalAddConfirmOpen(true),
    []
  );
  const handleModalAddConfirmClose = useCallback(
    () => setModalAddConfirmOpen(false),
    []
  );

  if (!isMobile) {
    return (
      <>
        <LoginModal open={loginOpen} handleClose={handleLoginClose} redirectTo={redirectTo} />
        <Box container sx={styles.container}>
          <Box mb={3} sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="displayName">{displayName}</Typography>
          </Box>
          <Box key={key}>
            <Slider {...sliderSettings}>
              {cards.map((card, i) => (
                <Card
                  key={i}
                  card={card}
                  handleChildClick={handleChildClick}
                  excluded={alreadyAddedCards.includes(card.id)}
                  handleModalAddConfirmOpen={handleModalAddConfirmOpen}
                  handleOpenLogin={handleOpenLogin}
                  currentUser={currentUser}
                />
              ))}
            </Slider>
          </Box>
        </Box>
        <ModalPrompt
          open={!!modalAddConfirmOpen}
          promptMessage="Card successfully added!"
          closeMessage="OK"
          actionMessage=""
          handleClose={handleModalAddConfirmClose}
          handleAction={null}
        />
      </>
    );
  } else {
    return (
      <>
        <LoginModal open={loginOpen} handleClose={handleLoginClose} redirectTo={redirectTo} />
        <Box container sx={styles.container.mobile}>
          <Box key={key}>
            <Slider
              {...sliderSettings}
              style={{ width: "99vw", position: "relative", left: "-10vw" }}
            >
              {cards.map((card, i) => (
                <Card
                  key={i}
                  card={card}
                  handleChildClick={handleChildClick}
                  excluded={alreadyAddedCards.includes(card.id)}
                  isMobile={true}
                  handleModalAddConfirmOpen={handleModalAddConfirmOpen}
                  handleOpenLogin={handleOpenLogin}
                  currentUser={currentUser}
                />
              ))}
            </Slider>
          </Box>
        </Box>
        <ModalPrompt
          open={!!modalAddConfirmOpen}
          promptMessage="Card successfully added!"
          closeMessage="OK"
          actionMessage=""
          handleClose={handleModalAddConfirmClose}
          handleAction={null}
        />
      </>
    );
  }
};

export default CardsToConsiderView;
