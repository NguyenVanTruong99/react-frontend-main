import { useParams } from "react-router";
import PlayerDetail from "components/Player/Detail";

const PlayerDetailPage = () => {
  const { id } = useParams();

  return <PlayerDetail playerId={id} />;
};

export default PlayerDetailPage;
