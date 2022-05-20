import DailyPerformersPlayerView from "./DailyPerformersPlayerView";
import { useCallback } from "react";
import { useNavigate }  from "react-router-dom";

const parseMetaData = (metadata, playerId) => 
  metadata[playerId]?.stats?.[0] ?? {}

const DailyPerformersPlayerContainer = ({ player, onClick, metadata }) => {
  const playerId = player?.id;
  const navigate = useNavigate();
  const handlePlayerClick = useCallback(() => 
    navigate(`/players/${playerId}`)
  , [playerId, navigate]);
  const stats = parseMetaData(metadata, player?.id);

  return <DailyPerformersPlayerView player={player} onClick={handlePlayerClick} stats={stats} />
}

export default DailyPerformersPlayerContainer;