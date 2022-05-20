import ShowcaseTableView from "./ShowcaseTableView";

const ShowcaseTableContainer = ({
  handleSelectedShowcasesChanged,
  initialSelectedShowcases,
  isLoading = false,
  lockIfInitialSelected = false,
  selectable = true,
  showcases = [],
}) => {
  return (
    <ShowcaseTableView
      handleSelectedShowcasesChanged={handleSelectedShowcasesChanged}
      initialSelectedShowcases={initialSelectedShowcases}
      isEmpty={showcases.length === 0 && !isLoading}
      loading={isLoading}
      lockIfInitialSelected={lockIfInitialSelected}
      selectable={selectable}
      showcases={showcases}
    />
  );
};

export default ShowcaseTableContainer;
