import { useMediaQuery, useTheme } from "@mui/material";

import AddCards from "assets/images/WelcomeCards/AddCards.jpg";
import PlayerCard from "assets/images/WelcomeCards/curry.jpg";
import PlayerImg from "assets/images/Player.png";
import ShowcaseCard from "assets/images/WelcomeCards/jon.jpg";
import Skee from "assets/images/WelcomeCards/skee.jpg";
import WelcomeView from "./WelcomeView";
import { useNavigate } from "react-router-dom";

const WelcomeContainer = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const welcomeCards = [
    {
      image: Skee,
      link: "/users/340afab7-ccf9-468e-a322-2c5a6e7b6372",
    },
    {
      image: ShowcaseCard,
      link: "/showcases/64e06857-4935-473e-8394-2323b735d90a",
    },
    {
      image: PlayerCard,
      link: "/players/4e3ad047-b324-4cca-b52e-e71fc69a0e87",
    },
    {
      image: AddCards,
      link: "/add-cards",
    },
  ];
  const profileImg =
    user?.approvedProfileImages.length > 0
      ? user?.approvedProfileImages[0]?.imageUrl
      : PlayerImg;
  const handleProfileClick = () => {
    navigate(`/profile`);
  };

  return (
    <WelcomeView
      isMobile={isMobile}
      welcomeCards={welcomeCards}
      user={user}
      profileImg={profileImg}
      handleProfileClick={handleProfileClick}
    />
  );
};

export default WelcomeContainer;
