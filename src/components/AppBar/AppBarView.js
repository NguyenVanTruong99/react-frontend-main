import { AppBar, Toolbar } from "@mui/material";
import StyledPopover from "./StyledPopoverView";

import Bar from "./Bar";
import MobileBar from "./MobileBar";
import SearchPanel from "./SearchPanel";
import styles from "./AppBarStyles";

const AppBarView = ({
  currentUser,
  handleMenuClicked,
  handleSearchClicked,
  handleSearchPanelClose,
  handleSearchQueryChange,
  handleSearchSubmit,
  isMenuOpen,
  isMobile,
  isSearchOpen,
  isSearchPanelOpen,
  searchAnchorEl,
  searchQuery,
  theme,
  signOut,
}) => (
  <>
    <AppBar position="fixed" color="transparent" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        {isMobile ? (
          <MobileBar
            currentUser={currentUser}
            isMenuOpen={isMenuOpen}
            isSearchOpen={isSearchOpen}
            handleMenuClicked={handleMenuClicked}
            handleSearchClicked={handleSearchClicked}
            handleSearchQueryChanged={handleSearchQueryChange}
            handleSearchSubmit={handleSearchSubmit}
            theme={theme}
            signOut={signOut}
          />
        ) : (
          <Bar
            currentUser={currentUser}
            isSearchOpen={isSearchOpen}
            handleSearchClicked={handleSearchClicked}
            handleSearchQueryChanged={handleSearchQueryChange}
            handleSearchSubmit={handleSearchSubmit}
            theme={theme}
            signOut={signOut}
          />
        )}
      </Toolbar>
    </AppBar>

    <StyledPopover
      anchorEl={searchAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      anchorPosition={{ top: 88, left: 0 }}
      anchorReference="anchorPosition"
      disableAutoFocus={true}
      disableEnforceFocus={true}
      PaperProps={{
        style: isMobile
          ? { width: "100%", top: "88px" }
          : { width: "100%", maxWidth: "600px", top: "66px" },
      }}
      onClose={handleSearchPanelClose}
      open={isSearchPanelOpen}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <SearchPanel
        currentUser={currentUser}
        isOpen={isSearchPanelOpen}
        handleSearchPanelClose={handleSearchPanelClose}
        term={searchQuery}
      />
    </StyledPopover>
  </>
);

export default AppBarView;
