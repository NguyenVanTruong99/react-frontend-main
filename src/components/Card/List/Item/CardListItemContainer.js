import CardListItemView from "./CardListItemView";
import { ListItemButton } from "@mui/material";
import { Box } from "@mui/system";

const CardListItemContainer = ({ card, userCard, onClick, onRemove }) => {
  return (
    <CardListItemView
      card={card}
      userCard={userCard}
      onClick={onClick}
      ItemInner={!!onClick ? ListItemButton : Box}
      onRemove={onRemove}
    />
  );
};

export default CardListItemContainer;
