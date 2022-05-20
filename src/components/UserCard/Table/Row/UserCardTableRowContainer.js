import UserCardTableRowView from "./UserCardTableRowView";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

const UserCardTableRowContainer = ({
  handleRowClicked,
  handleRowToggled,
  isSelected,
  item,
  RowActionComponent,
  selectable,
  visibleColumns,
  tableCellWidth,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const widthStyle = {
    width: tableCellWidth
      ? tableCellWidth
      : Math.floor(100 / (visibleColumns.length + 1)).toString() + "%",
  };
  const handleCardClick = (event, action) => {
    if (!handleRowClicked) {
      navigate(action);
    }
  };

  return (
    <UserCardTableRowView
      handleCardClick={handleCardClick}
      handleRowClicked={handleRowClicked}
      handleRowToggled={handleRowToggled}
      isSelected={isSelected}
      item={item}
      RowActionComponent={RowActionComponent}
      selectable={selectable}
      theme={theme}
      visibleColumns={visibleColumns}
      widthStyle={widthStyle}
    />
  );
};

export default UserCardTableRowContainer;
