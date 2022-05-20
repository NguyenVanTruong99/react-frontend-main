import { useNavigate } from "react-router-dom";
import PlayerTableRowView from "./PlayerTableRowView";

const PlayerTableRowContainer = ({ item, visibleColumns }) => {
  const navigate = useNavigate();

  const handlePlayerClicked = e => {
    navigate(`/players/${item.id}`);
  };

  return (
    <PlayerTableRowView
      handlePlayerClicked={handlePlayerClicked}
      item={item}
      visibleColumns={visibleColumns}
    />
  );
};

export default PlayerTableRowContainer;
