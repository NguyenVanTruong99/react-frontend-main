import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchIconView = ({ handleSearchClicked }) => (
  <IconButton
    edge="start"
    color="inherit"
    aria-label="search"
    onClick={handleSearchClicked}
  >
    <SearchIcon />
  </IconButton>
);

export default SearchIconView;
