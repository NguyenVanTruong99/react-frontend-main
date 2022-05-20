import CardSearchItemView from "./CardSearchItemView";

const CardSearchItemContainer = ({ card, onSelectCard, showThumbnails }) => {
  return (
    <CardSearchItemView
      card={card}
      onSelectCard={onSelectCard}
      showThumbnails={showThumbnails}
    />
  );
};

export default CardSearchItemContainer;
