import EmptyCardImg from "assets/images/empty-card-image.png";
import SimilarPlayerView from "./SimilarPlayersView";
import { getCards } from "components/Card/queries";
import { useQuery } from "@apollo/client";

const SimilarPlayerContainer = ({ cardIds, isSimilarPlayers=false }) => {
  const cards = [];
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
      };
      if (i < 3) {
        cards.push(card);
      }
    });
  }

  return <SimilarPlayerView players={cards.sort((a, b) => Number(a.year) - Number(b.year)).slice(0,1)}  />;
};

export default SimilarPlayerContainer;
