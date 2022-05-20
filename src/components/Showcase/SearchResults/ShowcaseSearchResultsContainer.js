import { useCallback, useEffect, useState } from "react";
import ShowcaseSearchResultsView from "./ShowcaseSearchResultsView";
import { useScrollToBottom } from "use-scroll-to-bottom";

const ShowcaseSearchResultsContainer = ({
  items,
  onSelectUserCard,
  onRemoveUserCard,
  selectedUserCards,
  onBottomReached = console.log,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [setBottomRef, isBottom] = useScrollToBottom();

  const handleSelectAll = useCallback(
    items => [
      !!selectAll ? items.map(onRemoveUserCard) : items.map(onSelectUserCard),
      setSelectAll(selectAll => !selectAll),
    ],
    [onSelectUserCard, onRemoveUserCard, selectAll]
  );

  useEffect(() => {
    !!isBottom && onBottomReached();
  }, [isBottom, onBottomReached]);

  return (
    <ShowcaseSearchResultsView
      items={items}
      setBottomRef={setBottomRef}
      onSelectUserCard={onSelectUserCard}
      onRemoveUserCard={onRemoveUserCard}
      onSelectAll={handleSelectAll}
      selectedUserCards={selectedUserCards}
      selectAll={selectAll}
    />
  );
};

export default ShowcaseSearchResultsContainer;
