import { useContext, useEffect, useState } from "react";

import BgPattern from "assets/images/Bg-med-pattern.png";
import { CurrentUserContext } from "contexts/CurrentUser";
import Modal from "components/Modal";
import WantListFilter from "components/WantList/Filter";
import WantListListView from "./WantListListView";
import { getUser } from "components/User/queries";
import { listMyWantListCards } from "../queries";
import { useQuery } from "@apollo/client";

const WantListListContainer = (initialFilters = [], FilterModalProps) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { data: { getUser: user } = {} } = useQuery(getUser, {
    skip: !currentUser?.authenticatable.id,
    variables: {
      id: currentUser?.authenticatable.id,
    },
  });

  const { error, data: { listMyWantListCards: wantListCards = [] } = {} } =
    useQuery(listMyWantListCards);

  !!error && console.error(error);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [cards, setCards] = useState(wantListCards);
  const allCards = wantListCards;

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleOpenFilterModal = () => {
    handleMenuClose();
    setIsFilterModalOpen(true);
  };

  const handleResetFilterModal = () => {
    setSelectedFilters({});
  };

  const handleFilterChanged = (field, value) => {
    let newFilters = { ...selectedFilters };

    if (!value && field in newFilters) {
      delete newFilters[field];
    } else if (value) {
      newFilters[field] = value;
    }

    setSelectedFilters(newFilters);
  };

  const handleApplyFilters = selectedFilters => {
    let cardsToDisplay = allCards;
    if (selectedFilters.setName?.length > 0) {
      cardsToDisplay = cardsToDisplay.filter(card =>
        selectedFilters.setName.includes(card.card.cardSet.name)
      );
    }
    if (selectedFilters.buyOrTrade?.length > 0) {
      if (selectedFilters.buyOrTrade.includes("Trade"))
        cardsToDisplay = cardsToDisplay.filter(
          card => card.willTradeFor === true
        );
      if (selectedFilters.buyOrTrade.includes("Buy"))
        cardsToDisplay = cardsToDisplay.filter(card => card.willBuy === true);
    }
    if (selectedFilters.playerName?.length > 0) {
      cardsToDisplay = cardsToDisplay.filter(card =>
        selectedFilters.playerName.includes(card.card.name)
      );
    }
    if (selectedFilters.sportName?.length > 0) {
      cardsToDisplay = cardsToDisplay.filter(card =>
        selectedFilters.sportName.includes(card.card.cardSet.sport.name)
      );
    }
    if (selectedFilters.year?.length > 0) {
      cardsToDisplay = cardsToDisplay.filter(
        card =>
          card.card.cardSet.year >= selectedFilters.year[0] &&
          card.card.cardSet.year <= selectedFilters.year[1]
      );
    }
    setCards(cardsToDisplay);
  };

  const handleShowFilterResults = () => {
    handleCloseFilterModal();

    if (handleApplyFilters) {
      handleApplyFilters(selectedFilters);
    }
  };

  // console.log("wantListCards", wantListCards)

  let setNames = [];
  let playerNames = [];
  let sportNames = [];
  let years = [];
  let yearRange = [1900, 2022];
  wantListCards.map(wantListCard => [
    !setNames.includes(wantListCard.card.cardSet.name) &&
      setNames.push(wantListCard.card.cardSet.name),
    !playerNames.includes(wantListCard.card.name) &&
      playerNames.push(wantListCard.card.name),
    !sportNames.includes(wantListCard.card.cardSet.sport.name) &&
      sportNames.push(wantListCard.card.cardSet.sport.name),
    !years.includes(wantListCard.card.cardSet.year) &&
      years.push(wantListCard.card.cardSet.year),
  ]);

  yearRange = [Math.min(...years), Math.max(...years)];

  useEffect(() => {
    setCards(allCards);
  }, [allCards]);

  return (
    <>
      <WantListListView
        wantListCards={cards}
        user={user}
        currentUser={currentUser}
        handleOpenFilterModal={handleOpenFilterModal}
      />
      <Modal
        actionLabel="Show Results"
        cancelLabel="Clear Filters"
        handleAction={handleShowFilterResults}
        handleClose={handleCloseFilterModal}
        handleCancel={handleResetFilterModal}
        isOpen={isFilterModalOpen}
        title={"Filter Cards"}
        headerImage={BgPattern}
        sx={{ minHeight: { md: 560 } }}
      >
        <WantListFilter
          {...FilterModalProps}
          handleFilterChanged={handleFilterChanged}
          selectedFilters={selectedFilters}
          setNames={setNames}
          playerNames={playerNames.sort()}
          sportNames={sportNames}
          yearRange={yearRange}
        />
      </Modal>
    </>
  );
};

export default WantListListContainer;
