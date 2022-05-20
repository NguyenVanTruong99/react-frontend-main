import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ReactComponent as CardMissing } from "assets/svg/missing-card-light.svg";
import { CurrentUserContext } from "contexts/CurrentUser";
import DataBox from "components/Data/Box";
import MyCollectionNav from "components/MyCollection/Nav";
import NoxxBg from "assets/images/Bg-md-nopattern.png";
import NoxxPattern from "assets/images/backgrounds/noxx-bg-md.png";
import SportIcon from "components/Sport/Icon";
import { USER_CARD_TABLE_COLS } from "constants/cards";
import UserAllocationAll from "components/User/Allocation/All";
import UserCardTable from "components/UserCard/Table";
import UserValueChart from "components/UserValue/Chart";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";
import { getUser } from "components/User/queries";
import { listSports } from "components/Sport/queries";
import { useQuery } from "@apollo/client";

const MyCollection = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [redirect, setRedirect] = useState(null);
  const userId = currentUser?.authenticatable?.id;
  const [hasCards, setHasCards] = useState();

  const { error, data: { getUser: user } = {} } = useQuery(getUser, {
    skip: !userId,
    variables: {
      id: userId,
    },
  });

  const styles = {
    content: {
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      maxWidth: 1200,
      paddingTop: theme => theme.spacing(4),
    },
  };

  const handleResults = useCallback(
    resultCount => setHasCards(resultCount > 0),
    [setHasCards]
  );

  useEffect(() => {
    !userId && setRedirect("/");
  }, [userId]);

  return !!redirect ? (
    <Navigate to={redirect} />
  ) : (
    <>
      <Box
        m={0}
        sx={{
          height: "150px",
          width: "100vw",
          position: "absolute",
          left: 0,
          top: 80,
          background: `url(${NoxxBg})`,
          backgroundSize: { md: "100% 100%", xs: "cover" },
          backgroundRepeat: "repeat",
        }}
      >
        <img
          src={NoxxPattern}
          alt="Noxx"
          style={{
            width: "70%",
            position: "absolute",
            overflow: "hidden",
            right: 0,
            bottom: 0,
            paddingBottom: "2px",
            zIndex: 2,
          }}
        />

        {/* <img src={NoxxPattern} alt="Noxx" style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 2 }} /> */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 3,
            width: "100%",
            top: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="text.white"
            variant="h2"
            sx={{ fontWeight: "bold", textAlign: "center", width: "90%" }}
          >
            {user?.username ?? "No username"}'s Collection
          </Typography>
          <MyCollectionNav />
        </Box>
      </Box>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", marginTop: "196px" }}>
        <DataArea userId={userId} />
        {/* {
        hasCards === false &&
        <NoCards />
      } */}
        <Box sx={{ py: 4 }}>
          <UserCardTable
            onResults={handleResults}
            columns={[
              USER_CARD_TABLE_COLS.DETAILS,
              USER_CARD_TABLE_COLS.GRADE,
              USER_CARD_TABLE_COLS.PAID,
              USER_CARD_TABLE_COLS.COMP_VALUE,
              USER_CARD_TABLE_COLS.POP,
              USER_CARD_TABLE_COLS.CREATED_AT,
              USER_CARD_TABLE_COLS.SHOWCASE_COUNT,
              USER_CARD_TABLE_COLS.SPORT,
              USER_CARD_TABLE_COLS.YEAR,
              USER_CARD_TABLE_COLS.STATUS,
              USER_CARD_TABLE_COLS.PUBLIC,
            ]}
            defaultSearchField={USER_CARD_TABLE_COLS.CREATED_AT}
            showCheckBoxes={true}
            term="*"
            title="My Cards"
          />
        </Box>
      </Box>
    </>
  );
};

const NoCards = () => (
  <Box
    sx={{
      backgroundColor: theme => theme.palette.background.default,
      p: 2,
      mt: 4,
      borderRadius: theme => theme.shape.borderRadius,
    }}
  >
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: theme => theme.palette.background.grey,
      }}
    >
      <Grid item xs />
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            py: 2,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              padding: 3,
            }}
          >
            <CardMissing style={{ width: "100%", height: "auto" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography align="center">
              You don't have any cards in your collection
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              component={Link}
              to="/add-cards"
            >
              Add Cards Now
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs />
    </Grid>
  </Box>
);

const DataArea = ({ userId }) => {
  const [sportId, setSportId] = useState(null);
  const handleChange = useCallback(sportId => setSportId(sportId), []);

  const { error, data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      sportId,
      id: userId,
    },
  });

  const theme = useTheme();
  const [variant, isMobile] = useMediaQuery(theme.breakpoints.down("sm"))
    ? ["scrollable", true]
    : ["fullWidth", false];

  return (
    <>
      <SportsFilterNav onChange={handleChange} variant={variant} />
      {!!user?.cardCount ? (
        <Paper
          sx={{
            mt: 2,
            // mx: 2,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: {
              lg: 2,
            },
            py: {
              lg: 1,
            },
          }}
        >
          <Grid spacing={1} container sx={{ pt: { xs: "8px", md: 0 } }}>
            <Grid item xs={6} md={3}>
              <DataBox
                skipDivider={variant === "scrollable" ? true : false}
                label={
                  <Typography variant="placeholder">
                    Collection Value
                  </Typography>
                }
                value={
                  <Typography variant="jumboMd">
                    {formatNumberAsCurrency(user?.collectionValue)}
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <DataBox
                skipDivider={variant === "scrollable" ? true : false}
                label={
                  <Typography variant="placeholder">Investment</Typography>
                }
                value={
                  <Typography variant="jumboMd">
                    {formatNumberAsCurrency(user?.investment)}
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <DataBox
                skipDivider={variant === "scrollable" ? true : false}
                label={
                  <Typography variant="placeholder">Profit / Loss</Typography>
                }
                value={
                  <Typography variant="jumboMd">
                    {formatNumberAsCurrency(
                      user?.collectionValue - user?.investment
                    )}
                  </Typography>
                }
                valueColor={
                  user?.collectionValue - user?.investment > 0
                    ? "success.main"
                    : "error.main"
                }
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <DataBox
                skipDivider
                label={<Typography variant="placeholder">Cards</Typography>}
                value={
                  <Typography variant="jumboMd">
                    {user?.cardCount ?? 0}
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ mx: 1, pt: 0 }} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <UserAllocationAll
                userId={userId}
                sportId={sportId}
                isMobile={isMobile}
              />
            </Grid>
            <Grid item xs={false} lg={0.2}>
              <Box sx={{ height: "90%" }}>
                <Divider
                  sx={{
                    my: 2,
                  }}
                  orientation="vertical"
                  variant="middle"
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={7.8} sx={{ px: "16px" }}>
              <UserValueChart userId={userId} sportId={sportId} />
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <NoCards />
      )}
    </>
  );
};

const SportsFilterNav = ({ onChange, variant }) => {
  const [value, setValue] = useState(0);
  const { data: { listSports: unsportedSports = [] } = {} } =
    useQuery(listSports);
  const sports = useMemo(
    () => unsportedSports.slice(0).sort((a, b) => (a.name > b.name ? 1 : -1)),
    [unsportedSports]
  );

  const handleChange = useCallback((event, newValue) => setValue(newValue), []);

  const theme = useTheme();

  useEffect(() => {
    !!onChange && onChange(value > 0 ? sports[value - 1].id : null);
  }, [value, onChange, sports]);

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant={variant}
      scrollButtons={false}
      sx={{
        "& .MuiTabs-indicator": {
          display: "none",
        },
      }}
      // indicatorColor={'transparent'}
    >
      {[{ name: "My Collection", id: "all" }, ...sports].map((sport, i) => (
        <Tab
          key={sport.id}
          style={{ borderRadius: "8px", marginRight: "8px", minWidth: "128px" }}
          label={
            <Box sx={{ position: "relative", width: "100%" }}>
              <Typography
                variant="cardAddLg"
                sx={{
                  color:
                    value === i
                      ? theme.palette.text.white
                      : theme.palette.text.primary,
                }}
              >
                {sport.name}
              </Typography>
              {value !== i && (
                <Box
                  sx={{
                    position: "absolute",
                    right: "-16px",
                    bottom: "-10px",
                    width: "calc(100% + 32px)",
                    height: "4px",
                    backgroundColor:
                      theme.palette.sports[sport.name.toLowerCase()],
                  }}
                />
              )}
            </Box>
          }
          icon={
            <SportIcon
              sportName={sport.name}
              sx={{
                color:
                  value === i
                    ? theme.palette.text.white
                    : theme.palette.grey[300],
                transform: "scale(1.15)",
              }}
            />
          }
          sx={{
            backgroundColor:
              value === i
                ? theme.palette.sports[sport.name.toLowerCase()]
                : theme.palette.background.paper,
          }}
        />
      ))}
    </Tabs>
  );
};

export default MyCollection;
