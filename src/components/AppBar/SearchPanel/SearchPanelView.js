import { useTheme } from "@emotion/react";
import {
  Box,
  CircularProgress,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { SEARCH_RESULT_TYPES } from "constants/search";
import SearchPanelResultBox from "./ResultBox";
import styles from "./SearchPanelStyles";

const SearchPanelView = ({
  currentUser,
  handleSearchPanelClose,
  handleSearchFilterChanged,
  handleViewAllClick,
  isEmpty = true,
  isLoading = false,
  results = [],
  selectedSearchFilter,
}) => {
  const theme = useTheme();
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        {isLoading && (
          <Box sx={styles.loading}>
            <CircularProgress />
          </Box>
        )}
        {!isLoading && (
          <Box sx={styles.nav}>
            <List sx={styles.navList}>
              <ListItemButton
                onClick={() =>
                  handleSearchFilterChanged(SEARCH_RESULT_TYPES.ALL)
                }
                sx={styles.navListItem}
                selected={selectedSearchFilter === SEARCH_RESULT_TYPES.ALL}
              >
                All Results
              </ListItemButton>
              <ListItemButton
                onClick={() =>
                  handleSearchFilterChanged(SEARCH_RESULT_TYPES.PLAYERS)
                }
                sx={styles.navListItem}
                selected={selectedSearchFilter === SEARCH_RESULT_TYPES.PLAYERS}
              >
                Players
              </ListItemButton>
              {currentUser && (
                <ListItemButton
                  onClick={() =>
                    handleSearchFilterChanged(SEARCH_RESULT_TYPES.USER_CARDS)
                  }
                  sx={styles.navListItem}
                  selected={
                    selectedSearchFilter === SEARCH_RESULT_TYPES.USER_CARDS
                  }
                >
                  My Cards
                </ListItemButton>
              )}
              <ListItemButton
                onClick={() =>
                  handleSearchFilterChanged(SEARCH_RESULT_TYPES.CARDS)
                }
                sx={styles.navListItem}
                selected={selectedSearchFilter === SEARCH_RESULT_TYPES.CARDS}
              >
                Cards
              </ListItemButton>
              {currentUser && (
                <ListItemButton
                  onClick={() =>
                    handleSearchFilterChanged(SEARCH_RESULT_TYPES.USERS)
                  }
                  sx={styles.navListItem}
                  selected={selectedSearchFilter === SEARCH_RESULT_TYPES.USERS}
                >
                  Members
                </ListItemButton>
              )}
            </List>
          </Box>
        )}
        {!isLoading && isEmpty && (
          <Box sx={styles.empty}>
            <Typography sx={styles.muted}>Search Results</Typography>
            {selectedSearchFilter === "Players" ? (
              <Typography sx={styles.bold}>
                Sorry, we couldn’t find any matching players
              </Typography>
            ) : selectedSearchFilter === "Users" ? (
              <Typography sx={styles.bold}>
                Sorry, we couldn’t find any users with a matching interest
              </Typography>
            ) : (
              <Typography sx={styles.bold}>
                Sorry, we couldn’t find any matching cards in NoXX collection
              </Typography>
            )}
          </Box>
        )}
        {!isLoading && !isEmpty && (
          <>
            <Box></Box>
            {results.length > 0 &&
              results.map((result, idx) => (
                <SearchPanelResultBox
                  background={
                    result.type === SEARCH_RESULT_TYPES.CARDS
                      ? theme.palette.grey.B100
                      : "transparent"
                  }
                  count={result.count}
                  handleSearchFilterChanged={handleSearchFilterChanged}
                  handleSearchPanelClose={handleSearchPanelClose}
                  handleViewAllClick={handleViewAllClick}
                  items={result.items}
                  key={idx}
                  showViewAll={result.type !== SEARCH_RESULT_TYPES.USERS}
                  viewAllLabel={
                    result.type === "UserCards" ||
                    result.type === "OtherUserCards"
                      ? "cards"
                      : result.type === "InterestUsers"
                      ? "users"
                      : result.type
                  }
                  title={result.title}
                  type={result.type}
                  otherUsers={result.otherUsers}
                />
              ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default SearchPanelView;
