import { CurrentUserContext } from "contexts/CurrentUser";
import PlayerCardTableView from "./PlayerCardTableView";
import { getPlayer } from "components/Player/queries";
import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const PlayerCardTableContainer = ({
  player,
  card,
  cardCount,
  setCardCount,
  plain = false,
}) => {
  const playerId = card ? card.players?.[0]?.id : player?.id;
  const { currentUser } = useContext(CurrentUserContext);

  const { data: { getPlayer: player1 } = {} } = useQuery(getPlayer, {
    variables: {
      id: playerId,
    },
  });

  if (!player) player = player1;
  const [resultCount, setResultCount] = useState(0);

  const handleOnResults = result => {
    setResultCount(result);
    setCardCount(result);
  };

  if (!player) return null;

  return (
    <PlayerCardTableView
      handleOnResults={handleOnResults}
      player={player}
      showCheckBoxes={true}
      resultCount={resultCount}
      plain={plain}
      cardCount={cardCount}
      setCardCount={setCardCount}
    />
  );
};

export default PlayerCardTableContainer;
