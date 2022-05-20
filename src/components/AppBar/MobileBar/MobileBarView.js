import { Box, Drawer, Grid, IconButton } from "@mui/material";

import ButtonBar from "components/AppBar/ButtonBar";
import Logo from "components/AppBar/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "components/AppBar/MobileMenu";
import SearchIcon from "components/AppBar/SearchIcon";
import SearchInput from "components/AppBar/SearchInput";
import theme from "theme";

const styles = {
  search: {
    display: "flex",
    alignItems: "center",
    border: theme => `1px solid ${theme.palette.text.grey}`,
    borderRadius: "8px",
    padding: "0 8px",
    width: "100%",
    mr: 1,
    "&:hover": {
      background: theme.palette.grey.B400,
    },
  },
};

const MobileBarView = ({
  currentUser,
  handleMenuClicked,
  handleSearchClicked,
  handleSearchSubmit,
  handleSearchQueryChanged,
  isSearchOpen,
  isMenuOpen,
  theme,
  signOut,
}) => {
  if (!!currentUser) {
    return (
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={0}
      sx={{height: 54}}

      >
        <Grid item xs={1}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: "-30px" }}
            onClick={handleMenuClicked}
          >
            <MenuIcon fontSize="md" />
          </IconButton>
          <Drawer anchor={"left"} open={isMenuOpen} onClose={handleMenuClicked}>
            <MobileMenu
              handleClose={handleMenuClicked}
              currentUser={currentUser}
              theme={theme}
              signOut={signOut}
            />
          </Drawer>
        </Grid>
        <Grid item xs={2}>
          <Logo isMobile={true} />
        </Grid>

        {isSearchOpen ? (
          <Grid item xs={8} sx={styles.search}>
            <Grid item xs={1}>
              <Box sx={{ ml: 1 }}>
                <SearchIcon handleSearchClicked={handleSearchClicked} />
              </Box>
            </Grid>
            <Grid item xs={11}>
              <SearchInput
                onChange={handleSearchQueryChanged}
                onSubmit={handleSearchSubmit}
                isMobile={true}
              />
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid item xs={1}>
              <Box sx={{ ml: 1 }}>
                <SearchIcon handleSearchClicked={handleSearchClicked} />
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ mr: "6px" }}>
              <ButtonBar
                currentUser={currentUser}
                isMobile={true}
                theme={theme}
                signOut={signOut}
              />
            </Grid>
          </>
        )}
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{height: 54}}
    >
      <Grid item xs={2}>
        <Logo isMobile={true} />
      </Grid>
      {isSearchOpen ? (
        <Grid item xs={9} mr={1} sx={styles.search}>
          <Grid item xs={1}>
            <Box>
              <SearchIcon handleSearchClicked={handleSearchClicked} />
            </Box>
          </Grid>
          <Grid item xs={7} mr={1}>
            <SearchInput
              onChange={handleSearchQueryChanged}
              onSubmit={handleSearchSubmit}
              isMobile={true}
            />
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid item xs={1}>
            <Box>
              <SearchIcon handleSearchClicked={handleSearchClicked} />
            </Box>
          </Grid>
          <Grid item xs={7} mr={1}>
            <ButtonBar
              currentUser={currentUser}
              isMobile={true}
              theme={theme}
              signOut={signOut}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default MobileBarView;
