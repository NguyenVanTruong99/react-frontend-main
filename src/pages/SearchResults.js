import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Navigate, useSearchParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import BreadCrumbs from "components/BreadCrumbs";
import { CurrentUserContext } from "contexts/CurrentUser";
import { USER_CARD_TABLE_COLS } from "constants/cards";
import { PLAYER_TABLE_COLS } from "constants/players";
import { USER_TABLE_COLS } from "constants/users";
import PlayerTableRow from "components/Player/Table/Row";
import { SEARCH_RESULT_TYPES } from "constants/search";
import Table from "components/Table";
import Tabs from "components/Tabs";
import { searchPlayers } from "components/Player/queries";
import { searchAll } from "components/AppBar/SearchPanel/queries.js";
import { useQuery } from "@apollo/client";
import CardTable from "components/Card/Table";
import UserCardTable from "components/UserCard/Table";
import UserSearchTable from "components/User/SearchTable";
import CardTableRowActionsContainer from "components/Card/Table/Row/Actions";

const SearchResults = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [redirect, setRedirect] = useState(null);

  const term = searchParams.get("query");
  const [currentTab, setCurrentTab] = useState(
    searchParams.get("type") || SEARCH_RESULT_TYPES.CARDS
  );

  const [count, setCount] = useState({
    [SEARCH_RESULT_TYPES.CARDS]: 0,
    [SEARCH_RESULT_TYPES.PLAYERS]: 0,
    [SEARCH_RESULT_TYPES.USER_CARDS]: 0,
    [SEARCH_RESULT_TYPES.OTHER_USER_CARDS]: 0,
    [SEARCH_RESULT_TYPES.INTEREST_USERS]: 0,
  });
  const [playerLimit, setPlayerLimit] = useState(10);
  const [playerOffset, setPlayerOffset] = useState(0);
  const [playerSort, setPlayerSort] = useState(PLAYER_TABLE_COLS.PLAYER);
  const [playerSortDirection, setPlayerSortDirection] = useState("desc");
  const { currentUser } = useContext(CurrentUserContext);

  const { loading, data } = useQuery(searchAll, {
    skip: !term,
    variables: {
      term,
      offsetAttributes: {
        limit: 0,
      },
    },
  });

  useEffect(() => {
    if (!loading) {
      const newCount = {};
      data?.searchAll?.results?.forEach(r => {
        newCount[r.type] = r.count;
      });
      setCount(newCount);
    }
  }, [loading, data]);

  const playerData = useQuery(searchPlayers, {
    skip: !term,
    variables: {
      term,
      sortAttributes: {
        sortField: playerSort?.sortableField,
        direction: playerSortDirection,
      },
      offsetAttributes: {
        limit: playerLimit,
        offset: playerOffset,
      },
    },
  });

  const playerResults = playerData?.data?.searchPlayers?.results[0];
  const playerLoading = playerData.loading;

  const tabs = [
    {
      value: SEARCH_RESULT_TYPES.PLAYERS,
      label: `Players (${
        count[SEARCH_RESULT_TYPES.PLAYERS].toLocaleString() || 0
      })`,
    },
    {
      value: SEARCH_RESULT_TYPES.CARDS,
      label: `Cards (${count[SEARCH_RESULT_TYPES.CARDS].toLocaleString()})`,
    },
  ];

  if (!!currentUser) {
    tabs.splice(1, 0, {
      value: SEARCH_RESULT_TYPES.USER_CARDS,
      label: `My Cards (${
        count[SEARCH_RESULT_TYPES.USER_CARDS].toLocaleString() || 0
      })`,
    });
    tabs.splice(3, 0, {
      value: SEARCH_RESULT_TYPES.OTHER_USER_CARDS,
      label: `Other Members' Cards (${
        count[SEARCH_RESULT_TYPES.OTHER_USER_CARDS].toLocaleString() || 0
      })`,
    });
    tabs.splice(3, 0, {
      value: SEARCH_RESULT_TYPES.USERS,
      label: `Members (${
        count[SEARCH_RESULT_TYPES.INTEREST_USERS]?.toLocaleString() || 0
      })`,
    });
  }

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
    setSearchParams({ query: term, type: newTab });
  };

  useEffect(() => {
    if (!!searchParams.get("type") && searchParams.get("type") !== currentTab) {
      setCurrentTab(searchParams.get("type"));
    }
  }, [searchParams, setCurrentTab, currentTab]);

  const useStyles = makeStyles(theme => ({
    flexContainer: {
      justifyContent: "flex-end",
    },
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const tabVariant = isMobile ? "scrollable" : "standard";
  const sum =
    (count[SEARCH_RESULT_TYPES.CARDS] || 0) +
    (count[SEARCH_RESULT_TYPES.PLAYERS] || 0) +
    (count[SEARCH_RESULT_TYPES.USER_CARDS] || 0) +
    (count[SEARCH_RESULT_TYPES.OTHER_USER_CARDS] || 0) +
    (count[SEARCH_RESULT_TYPES.INTEREST_USERS] || 0);
  const showResults = sum > 0;
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  if (!term) {
    setRedirect("/my-collection");
  }

  return (
    <Box sx={{ padding: "32px 8px 8px" }}>
      <BreadCrumbs
        history={[{ path: "/my-collection", label: "My Collection" }]}
        currentPage="Search Results"
      />
      <Box sx={{ padding: "16px 0 0" }}>
        <Grid container sx={{ marginBottom: theme => theme.spacing(3) }}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h3">
              Results for <Box component="span">&ldquo;{term}&rdquo;</Box>
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: theme => theme.palette.grey.B200 }}
            >
              {sum.toLocaleString()} Results
            </Typography>
          </Grid>
          {showResults && (
            <Grid item xs={12} md={12} lg={6}>
              <Tabs
                currentTab={currentTab}
                handleTabChange={handleTabChange}
                tabs={tabs}
                classes={isMobile ? null : classes}
                variant={tabVariant}
                sx={{ tab: { px: "8px" } }}
              />
            </Grid>
          )}
        </Grid>
        {currentTab === SEARCH_RESULT_TYPES.CARDS && (
          <CardTable
            term={term}
            showCheckBoxes={!!currentUser}
            title={"Cards"}
          />
        )}
        {currentTab === SEARCH_RESULT_TYPES.USER_CARDS && (
          <UserCardTable term={term} showCheckBoxes={true} otherUsers={false} />
        )}
        {currentTab === SEARCH_RESULT_TYPES.OTHER_USER_CARDS && (
          <UserCardTable
            RowActionComponent={CardTableRowActionsContainer}
            tableCellWidth={"11%"}
            term={term}
            showCheckBoxes={false}
            title={"Other Collectors' Cards"}
            otherUsers={true}
            columns={[
              USER_CARD_TABLE_COLS.DETAILS,
              USER_CARD_TABLE_COLS.OWNER,
              USER_CARD_TABLE_COLS.GRADE,
              USER_CARD_TABLE_COLS.POP,
              USER_CARD_TABLE_COLS.SPORT,
              USER_CARD_TABLE_COLS.YEAR,
            ]}
          />
        )}
        {currentTab === SEARCH_RESULT_TYPES.PLAYERS && (
          <Table
            columns={[
              PLAYER_TABLE_COLS.PLAYER,
              PLAYER_TABLE_COLS.POSITION,
              PLAYER_TABLE_COLS.NUMBER,
              PLAYER_TABLE_COLS.SPORT,
              PLAYER_TABLE_COLS.TEAM,
              PLAYER_TABLE_COLS.STATUS,
            ]}
            count={count[SEARCH_RESULT_TYPES.PLAYERS]}
            handleChangeRowsPerPage={event => {
              setPlayerLimit(Number(event.target.value) || 10);
              setPlayerOffset(0);
            }}
            handleSortingChanged={(field, direction) => {
              setPlayerSort(field);
              setPlayerSortDirection(direction);
            }}
            handleChangePage={(event, page) => {
              setPlayerOffset(page * playerLimit);
            }}
            isLoading={playerLoading}
            page={playerOffset / playerLimit}
            rows={playerResults?.items || []}
            RowComponent={PlayerTableRow}
            rowsPerPage={playerLimit}
            sortable={true}
            sortColumn={playerSort}
            sortDirection={playerSortDirection}
            title="Players"
          />
        )}
        {currentTab === SEARCH_RESULT_TYPES.USERS && (
          <UserSearchTable
            RowActionComponent={null}
            term={term}
            showCheckBoxes={false}
            title={"Members"}
            columns={[
              USER_TABLE_COLS.MEMBER,
              USER_TABLE_COLS.INTEREST,
              USER_TABLE_COLS.MUTUAL_FRIENDS,
            ]}
          />
        )}
      </Box>
    </Box>
  );
};

export default SearchResults;
