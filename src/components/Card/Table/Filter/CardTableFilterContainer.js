import { useState } from "react";
import CardTableFilterView from "./CardTableFilterView";

const CardTableFilterContainer = ({
  handleFilterChanged,
  grades = [],
  playerNames = [],
  selectedFilters,
  setNames = [],
  sportNames = [],
  cardStatuses = [],
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
    <CardTableFilterView
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
      setNames={setNames}
      sportNames={sportNames}
      yearRange={yearRange}
    />
  );
};

export default CardTableFilterContainer;
