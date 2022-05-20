import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import SearchPanelResultBoxView from "./SearchPanelResultBoxView";
import { SEARCH_RESULT_TYPES } from "constants/search";

const SearchPanelResultBoxContainer = ({
  background,
  count,
  handleSearchPanelClose,
  handleViewAllClick,
  items,
  title,
  showViewAll = true,
  viewAllLabel = "",
  type = "",
  otherUsers,
}) => {
  const navigate = useNavigate();

  const handleItemClick = (e, url) => {
    handleSearchPanelClose();
    navigate(`${url}`);
  };

  const isUserCards = type === SEARCH_RESULT_TYPES.USER_CARDS;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SearchPanelResultBoxView
      count={count}
      flexDirection={isUserCards ? "row" : "column"}
      handleItemClick={handleItemClick}
      handleViewAllClick={handleViewAllClick}
      items={items}
      mode={isUserCards ? "carousel" : "list"}
      showViewAll={showViewAll}
      style={{ background }}
      theme={useTheme()}
      isMobile={isMobile}
      title={title}
      type={type}
      viewAllLabel={viewAllLabel}
    />
  );
};

export default SearchPanelResultBoxContainer;
