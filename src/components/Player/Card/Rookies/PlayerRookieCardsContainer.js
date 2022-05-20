import EmptyCardImg from "assets/images/empty-card-image.png";
import PlayerRookieCardsView from "./PlayerRookieCardsView";
import { getCards } from "components/Card/queries";
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@apollo/client";

const PlayerRookieCardsContainer = ({ cardIds }) => {
  const cards = [];
  const navigate = useNavigate();
  const { error, data } = useQuery(getCards, {
    variables: {
      cardIds: cardIds,
    },
  });
  !!error && console.error("error", error);

  if (!!data) {
    const d = data.listCards;
    Object.keys(d).forEach(function (key, i) {
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
        totalSales: c.totalSales ? c.totalSales : "-",
      };
      if (i < 3) {
        cards.push(card);
      }
    });
  }

  const handleCardClick = useCallback((card) => {
    navigate(`/cards/${card.id}`);
  }, []);

  return <PlayerRookieCardsView cards={cards.sort((a, b) => Number(a.year) - Number(b.year))} handleCardClick={handleCardClick}/>;
};

export default PlayerRookieCardsContainer;
