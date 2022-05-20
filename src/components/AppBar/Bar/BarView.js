import "./BarView.css";

import { Box, Grid } from "@mui/material";

import BarLinksView from "components/AppBar/Bar/BarLinksView";
import ButtonBar from "components/AppBar/ButtonBar";
// import { Link } from "react-router-dom";
import Logo from "components/AppBar/Logo";
import ProfileBox from "components/AppBar/ProfileBox";
import { React } from "react";
import SearchIcon from "components/AppBar/SearchIcon";
import SearchInput from "components/AppBar/SearchInput";
import styles from "./AppBarStyles.js";

const currentPage = window.location.pathname;
const BarView = ({
  currentUser,
  handleSearchClicked,
  handleSearchSubmit,
  handleSearchQueryChanged,
  isSearchOpen,
  theme,
  signOut,
}) => {
  if (!!currentUser) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={1.5} lg={1}>
          <Logo isMobile={false} />
        </Grid>
        <Grid item md={4} lg={4}>
          <Box
            className={"search-input"}
            focus={isSearchOpen}
            sx={styles.nav.search}
          >
            <SearchIcon />
            <SearchInput
              onChange={handleSearchQueryChanged}
              onSubmit={handleSearchSubmit}
              isMobile={false}
            />
          </Box>
        </Grid>
        <Grid item sm={4} md={5}>
          <BarLinksView className={"bar-links"} focus={isSearchOpen} />
        </Grid>
        <Grid item md={1} lg={1} mr={1}>
          <ProfileBox
            currentUser={currentUser}
            isMobile={false}
            theme={theme}
            signOut={signOut}
          />
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={1} md={1.5}>
        <Logo isMobile={false} />
      </Grid>
      <Grid item md={6.5} pr={8}>
        <Box focus={isSearchOpen} sx={styles.nav.search}>
          <SearchIcon handleSearchClicked={handleSearchClicked} />
          <SearchInput
            onChange={handleSearchQueryChanged}
            onSubmit={handleSearchSubmit}
            isMobile={false}
          />
        </Box>
      </Grid>
      <Grid item xs={4} md={4}>
        <ButtonBar currentPage={currentPage} theme={theme} />
      </Grid>
    </Grid>
  );
};
export default BarView;
