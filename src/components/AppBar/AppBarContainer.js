import { useContext, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import AppBarView from "./AppBarView";
import { CurrentUserContext } from "contexts/CurrentUser";
import { useNavigate } from "react-router-dom";

const AppBarContainer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { currentUser, signOut } = useContext(CurrentUserContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);
  const isSearchPanelOpen = Boolean(searchAnchorEl);

  const handleSearchClicked = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuClicked = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchQueryChange = event => {
    setSearchQuery(event.target.value);

    if (event.target.value.length > 2) setSearchAnchorEl(event.currentTarget);
    else setSearchAnchorEl(null);
  };

  const handleSearchSubmit = event => {
    let query = event.target.value || searchQuery;

    if (query) {
      setSearchAnchorEl(null);
      navigate(`/search?query=${query}`);
    }
  };

  const handleSearchPanelClose = () => {
    setSearchAnchorEl(null);
  };
  return (
    <>
      <AppBarView
        currentUser={currentUser}
        handleMenuClicked={handleMenuClicked}
        handleSearchClicked={handleSearchClicked}
        handleSearchPanelClose={handleSearchPanelClose}
        handleSearchQueryChange={handleSearchQueryChange}
        handleSearchSubmit={handleSearchSubmit}
        isMenuOpen={isMenuOpen}
        isMobile={isMobile}
        isSearchOpen={isSearchOpen}
        isSearchPanelOpen={isSearchPanelOpen}
        searchAnchorEl={searchAnchorEl}
        searchQuery={searchQuery}
        theme={theme}
        signOut={signOut}
      />
    </>
  );
};

export default AppBarContainer;
