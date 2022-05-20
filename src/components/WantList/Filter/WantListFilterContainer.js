import WantListFilterView from "./WantListFilterView";
import { useState } from "react";

const WantListFilterContainer = ({
  handleFilterChanged,
  grades = [],
  playerNames = [],
  selectedFilters,
  setNames = [],
  sportNames = [],
  cardStatuses = [],
  buyOrTrade = ["Buy", "Trade"],
  yearRange = [1900, 2022],
}) => {
  const selectedYearRange = selectedFilters?.year || yearRange;

  const [yearInput, setYearInput] = useState(selectedYearRange.join(" - "));

  const handleYearInputChange = event => {
    setYearInput(event.target.value || "");
  };

  const handleYearRangeChange = event => {
    let newRange;

    if (Array.isArray(event.target.value)) {
      newRange = event.target.value;
    } else {
      const range = event.target.value.split("-");

      if (range.length === 2) {
        const formattedRange = range
          .map(year => parseInt(year.trim(), 10))
          .filter(
            year => !isNaN(year) && year >= yearRange[0] && year <= yearRange[1]
          );

        if (formattedRange.length === 2) {
          newRange = formattedRange;
        }
      }
    }

    handleFilterChanged("year", newRange);
  };

  return (
    <WantListFilterView
      cardStatuses={cardStatuses}
      grades={grades}
      handleFilterChanged={handleFilterChanged}
      handleYearInputChange={handleYearInputChange}
      handleYearRangeChange={handleYearRangeChange}
      playerNames={playerNames}
      selectedCardStatuses={selectedFilters.cardStatus || []}
      selectedGrades={selectedFilters.grade || []}
      selectedPlayerNames={selectedFilters.playerName || []}
      selectedSetNames={selectedFilters.setName || []}
      selectedSportNames={selectedFilters.sportName || []}
      selectedYearInput={yearInput}
      selectedYearRange={selectedYearRange}
      selectedBuyOrTrade={selectedFilters.buyOrTrade || []}
      setNames={setNames}
      sportNames={sportNames}
      yearRange={yearRange}
      buyOrTrade={buyOrTrade}
    />
  );
};

export default WantListFilterContainer;
