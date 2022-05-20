import { useCallback, useState } from "react";

import CardSearchView from "./CardSearchView";
import ModalPrompt from "components/ModalPrompt";
import { searchCards } from "components/Card/queries";
import { useQuery } from "@apollo/client";

const CardSearchContainer = ({
  initialTerm,
  onSelectCard,
  limit = 10,
  offset = 0,
  onType,
  addBulkOpen,
  handleAddBulkOpen,
  handleAddBulkClose,
} = {}) => {
  const [term, setTerm] = useState(initialTerm ?? "");
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const handleAddOpen = useCallback(() => setAddOpen(true), []);
  const handleAddClose = useCallback(() => setAddOpen(false), []);
  const clear = useCallback(() => setTerm(""), []);

  const handleSelectCard = useCallback(
    cardId => [setSelectedCardId(cardId), handleAddOpen()],
    [setSelectedCardId, handleAddOpen]
  );

  const handleAction = useCallback(() => {
    onSelectCard(selectedCardId);
    clear();
    handleAddClose();
  }, [onSelectCard, clear, selectedCardId]);

  const handleSearchChange = useCallback(
    term => {
      setTerm(term);
      onType(term);
    },
    [onType]
  );

  const handleThumbnailChange = useCallback(
    () => setShowThumbnails(showThumbnails => !showThumbnails),
    []
  );

  const { error, data: { searchCards: { results = [] } = {} } = {} } = useQuery(
    searchCards,
    {
      skip: !term,
      variables: {
        term,
      },
    }
  );

  // const cards = (results[0]?.items ?? []).map(c => c.card);

  !!error && console.error(error);

  return (
    <>
      <CardSearchView
        onSelectCard={handleSelectCard}
        term={term}
        onSearchChange={handleSearchChange}
        items={results[0]?.items ?? []}
        onThumbnailChange={handleThumbnailChange}
        showThumbnails={showThumbnails}
        addOpen={addOpen}
        handleAddClose={handleAddClose}
        handleAction={handleAction}
      />
    </>
  );
};

export default CardSearchContainer;
