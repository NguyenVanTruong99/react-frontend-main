import ShowcaseTableRowView from "./ShowcaseTableRowView";

const ShowcaseTableRowContainer = ({
  handleRowClicked,
  handleRowToggled,
  initialSelectedRows = [],
  isSelected,
  item,
  lockIfInitialSelected,
  selectable,
  visibleColumns,
}) => {
  const isLocked = lockIfInitialSelected && initialSelectedRows.includes(item);
  
  const coverImage = item?.coverImageUrl

  return (
    <ShowcaseTableRowView
      coverImage={coverImage}
      handleRowClicked={handleRowClicked}
      handleRowToggled={handleRowToggled}
      isSelectDisabled={isSelected && isLocked}
      isSelected={isSelected}
      item={item}
      selectable={selectable}
      visibleColumns={visibleColumns}
    />
  );
};

export default ShowcaseTableRowContainer;
