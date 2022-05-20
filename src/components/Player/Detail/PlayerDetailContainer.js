import { useCallback, useContext, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import { CurrentUserContext } from "contexts/CurrentUser";
import PlayerDetailView from "./PlayerDetailView";
import { getPlayer } from "components/Player/queries";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

const PlayerDetailContainer = ({ playerId }) => {
  const { data: { getPlayer: player } = {} } = useQuery(getPlayer, {
    variables: {
      id: playerId,
    },
  });

  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [cardCount, setCardCount] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let parsedStats = null;
  let rookieCards = null;
  try {
    rookieCards = !player
      ? null
      : JSON.parse(player?.notableCardIds?.replace(/=>/gi, ":"))["card_id"];
  } catch (error) {
    console.error("No rookie cards found");
  }
  try {
    parsedStats = !player
      ? null
      : Object.entries(
        JSON.parse(player?.careerStats?.replace(/=>/gi, ":"))
      ).map(s => [s[0].toUpperCase().replace(/_/gi, " "), s[1]]);
  } catch (error) {
    console.error("No stats found");
  }
  const [addClipOpen, setAddClipOpen] = useState(false);
  const handleAddClipOpen = useCallback(() => setAddClipOpen(true), []);
  const handleAddClipClose = useCallback(() => setAddClipOpen(false), []);

  function getPlayerBioUrl(firstName, lastName) {
    return `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=${firstName}%20${lastName}&origin=*`;
  }

  const handleShare = () => {
    const url = `${window.location.protocol}//${window.location.host}/players/${player?.id}`;
    if (navigator.share && isMobile) {
      navigator.share({
        title: "Share Card",
        url: url,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      handleAddClipOpen();
    }
  };

  function getUrl(fullName) {
    let name = fullName.split(" ");
    let firstName = name[0];
    let lastName = name[1];
    let url = getPlayerBioUrl(firstName, lastName);
    return url;
  }

  const addCardsClick = useCallback(
    () => (currentUser ? navigate("/add-cards") : setLoginOpen(true)),
    [currentUser]
  );

  const redirectTo = `/players/${player?.id}`;

  return !player ? null : (
    <PlayerDetailView
      player={player}
      isMobile={isMobile}
      onShare={handleShare}
      parsedStats={parsedStats}
      bioUrl={getUrl(player.fullName)}
      rookieCards={rookieCards}
      cardCount={cardCount}
      setCardCount={setCardCount}
      addClipOpen={addClipOpen}
      handleAddClipOpen={handleAddClipOpen}
      handleAddClipClose={handleAddClipClose}
      loginOpen={loginOpen}
      handleLoginClose={() => setLoginOpen(false)}
      redirectTo={redirectTo}
      addCardsClick={addCardsClick}
    />
  );
};

export default PlayerDetailContainer;
