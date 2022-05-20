import { Grid, Typography } from "@mui/material";

import BecauseYouLikeList from "components/Profile/BecauseYouLikeList";
import { Box } from "@mui/system";
import CardGradeDataSummary from "components/CardGrade/DataSummary";
import CompChart from "components/Comp/Chart";
import DataAllocation from "components/Data/Allocation";
import DataBox from "components/Data/Box";
import DataMovementChart from "components/Data/MovementChart";
import { DateTime } from "luxon";
import React from "react";
import UserAllocationAll from "components/User/Allocation/All";
import UserDataSummary from "components/User/DataSummary";
import YouMayKnowList from "components/Profile/YouMayKnowList";
import { useTheme } from "@emotion/react";

// const testCardGradeId = "756bd376-959a-41fa-9e63-96a60a1e6d5c"
const testUserId = "585be70c-6db7-410f-be33-c4213246bef3";
const testPlayerId = "e9819947-5d2e-4346-b630-2994f15408ec";
const testCardGradeId = "a0887a8b-758e-4243-8fa0-66f44cf40b2d";

const typographyVariants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "overline",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "button",
  "caption",
];

const Design = () => {
  // const location = useLocation();

  const theme = useTheme();

  console.log("theme", theme);

  return (
    <>
      <Box mt={3}>
        <YouMayKnowList />
        <BecauseYouLikeList />
      </Box>
      {typographyVariants.map(variant => (
        <Box
          key={variant}
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant={variant}>Typography - </Typography>
          <Box
            component="pre"
            sx={{
              ml: 1,
              p: 1,
              backgroundColor: theme => theme.palette.background.paper,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme => theme.palette.divider,
            }}
          >
            <code>
              &lt;Typography variant="{variant}
              "&gt;Typography&lt;/Typography&gt;
            </code>
          </Box>
        </Box>
      ))}
      <Typography variant="h1">Colors</Typography>
      {["primary", "secondary", "success", "info", "warning", "error"].map(
        k => (
          <React.Fragment key={k}>
            <Typography variant="h6">{k}</Typography>
            {Object.entries(theme.palette[k]).map(([key, value]) => (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  my: 1,
                }}
              >
                <Box
                  sx={{ height: 40, width: 40, backgroundColor: value, mr: 1 }}
                ></Box>
                <Typography color={value}>{key}</Typography>
              </Box>
            ))}
          </React.Fragment>
        )
      )}
      {[
        "background",
        "accents",
        "action",
        "blue",
        "common",
        "grey",
        "text",
        "white",
        "sports",
      ].map(k => (
        <React.Fragment key={k}>
          <Typography variant="h6">{k}</Typography>
          {Object.entries(theme.palette[k]).map(([key, value]) => (
            <Box
              key={key}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 1,
              }}
            >
              <Box
                sx={{ height: 40, width: 40, backgroundColor: value, mr: 1 }}
              ></Box>
              <Typography color={value}>{key}</Typography>
            </Box>
          ))}
        </React.Fragment>
      ))}
      <Typography variant="h6">Misc</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          my: 1,
        }}
      >
        <Box
          sx={{
            height: 40,
            width: 40,
            backgroundColor: theme.palette.divider,
            mr: 1,
          }}
        ></Box>
        <Typography color={theme.palette.divider}>divider</Typography>
      </Box>
      <CardGradeDataSummary cardGradeId={testCardGradeId} />
      <UserDataSummary userId={testUserId} />
      <UserDataSummary userId={testUserId} playerId={testPlayerId} />
      {/* <CardGradeAllocationUserAndPlayer userId={testUserId} playerId={testPlayerId} /> */}
      <UserAllocationAll userId={testUserId} />
      <CompChart cardGradeId={testCardGradeId} startDate={DateTime.now()} />
      <Grid container spacing={0}>
        <Grid item xs={12} md={3}>
          <DataBox
            label="Test 1"
            value="$1,000"
            secondaryLabel="Last 24 Hours"
            secondaryValue="+ 0.23%"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DataBox
            label="Test 1"
            value="$1,000"
            secondaryLabel="Last 24 Hours"
            secondaryValue="+ 0.23%"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DataBox
            label="Test 1"
            value="$1,000"
            secondaryLabel="Last 24 Hours"
            secondaryValue="+ 0.23%"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DataBox
            label="Test 1"
            value="$1,000"
            secondaryLabel="Last 24 Hours"
            secondaryValue="+ 0.23%"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <DataAllocation />
        </Grid>
        <Grid item xs={12} md={8}>
          <DataMovementChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Design;
