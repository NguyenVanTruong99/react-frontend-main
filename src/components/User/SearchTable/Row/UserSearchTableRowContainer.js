import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import UserSearchTableRowView from "./UserSearchTableRowView";

const UserSearchTableRowContainer = ({
  handleRowClicked,
  handleRowToggled,
  isSelected,
  item,
  RowActionComponent,
  selectable,
  visibleColumns,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleUserClick = (event, action) => {
    if (!handleRowClicked) {
      navigate(action);
    }
  };
  return (
    <UserSearchTableRowView
      handleUserClick={handleUserClick}
      handleRowClicked={handleRowClicked}
      handleRowToggled={handleRowToggled}
      isSelected={isSelected}
      item={item}
      RowActionComponent={RowActionComponent}
      selectable={selectable}
      theme={theme}
      visibleColumns={visibleColumns}
    />
  );
};

export default UserSearchTableRowContainer;
