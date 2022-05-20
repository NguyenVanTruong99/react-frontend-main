import { useContext, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import { Box } from "@mui/system";
import CardsToConsiderView from "./CardsToConsiderView";
import { CurrentUserContext } from "contexts/CurrentUser";
import EmptyCardImg from "assets/images/empty-card-image.png";
import { getCards } from "components/Card/queries";
import { useQuery } from "@apollo/client";

const CardsToConsiderContainer = ({ user, cardIds, displayName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cards = [];
  const [loginOpen, setLoginOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  // const userId = cardId;
  const { error, data, loading } = useQuery(getCards, {
    variables: {
      cardIds: cardIds,
    },
  });
  !!error && console.error(error);
  if (!!data) {
    const d = data.listCards;
    Object.keys(d).forEach(function (key) {
      const c = d[key];
      let card = {};
      card = {
        id: c.id ? c.id : "",
        name: c.name ? c.name : "No card name",
        year: c.cardSet.year ? c.cardSet.year : "",
        number: c.cardNumber ? c.cardNumber : "",
        set: c.cardSet.name ? c.cardSet.name : "",
        desc: c.cardSet.variety
          ? c.cardSet.variety === "Base"
            ? ""
            : c.cardSet.variety
          : "",
        imageUrl: c.frontUrl ? c.frontUrl : EmptyCardImg,
        totalGraded: c.totalGraded ? c.totalGraded : "-",
      };
      cards.push(card);
    });
  }


  return !!loading ? <Box sx={{ width: "100%", height: 300 }}>Loading...</Box> : (
    <CardsToConsiderView
      isMobile={isMobile}
      cards={cards}
      displayName={displayName}
      loginOpen={loginOpen}
      handleLoginClose={() => setLoginOpen(false)}
      handleOpenLogin={() => setLoginOpen(true)}
      redirectTo={"/"}
      currentUser={currentUser}
    />
  );
};

export default CardsToConsiderContainer;
