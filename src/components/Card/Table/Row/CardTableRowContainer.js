import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardTableRowView from "./CardTableRowView";
import useStyle from "./CardTableRowStyles";

const CardTableRowContainer = ({
  handleRowClicked,
  handleRowToggled,
  isSelected,
  item,
  RowActionComponent,
  selectable,
  userCardsSet,
  visibleColumns,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const numColumns = visibleColumns.length - 1;
  const style = useStyle(selectable, numColumns);
  const userHasCard = userCardsSet.has(item.card.id);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCardClick = (event, action) => {
    if (!handleRowClicked) {
      navigate(`/cards/${item.id}`);
    } else {
      handleRowClicked(item.id);
    }
  };

  return (
    <CardTableRowView
      handleCardClick={handleCardClick}
      handleRowClicked={handleRowClicked}
      handleRowToggled={handleRowToggled}
      isSelected={isSelected}
      item={item}
      RowActionComponent={RowActionComponent}
      selectable={selectable}
      userHasCard={userHasCard}
      visibleColumns={visibleColumns}
      style={style}
    />
  );
};

export default CardTableRowContainer;
