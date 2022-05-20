import * as React from "react";

import Box from "@mui/material/Box";
import CardsToConsider from "components/CardsToConsider";
import CollectorsToConnectWith from "components/CollectorsToConnectWith";
import DailyPerformers from "components/DailyPerformers";
import IdentityBar from "components/IdentityBar";
import MobileBarBg from "assets/images/backgrounds/mobileBar.png";
import NewToNoxx from "components/NewToNoxx";
import NotchBG from "assets/images/notches/Bg.png";
import NoxxSm from "assets/svg/noxx_sm.svg";
import OnboardingBar from "components/OnboardingBar";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Welcome from "components/Welcome";
import { getContentModules } from "components/User/queries";
import { useQuery } from "@apollo/client";

// import Typography from '@mui/material/Typography';

const styles = {
  tabs: {
    padding: "8px 0 8px 36px",
    background: "#F7F8FB",
    outline: "1px solid #F7F8FB",
    backgroundImage: `url(${MobileBarBg})`,
    backgroundRepeat: "no-repeat",
    marginRight: "-2px",
    backgroundSize: "100% 100%",
    position: "relative",
    top: 6,
    "& .indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: "85%",
        width: "85%",
        position: "relative",
        bottom: "6px",
        backgroundColor: "#258aff",
      },
    },
  },
  tab: {
    height: "100%",
    // p:0,
    px: 1,
    tab: {
      color: "white",
    },
  },
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MobileEntryPageContainer = ({ currentUser, user }) => {
  const userId = currentUser?.authenticatable.id;
  const { loading, error, data } = useQuery(getContentModules);

  !!error && console.error(error);
  var modules = [];
  if (!!data) {
    data["listMyContentModules"].forEach(module => {
      if (module.module.name === "NewToNoxx") {
        modules.push(
          <NewToNoxx
            user={user}
            userCardIds={module.data.ids}
            displayName={module.module.displayName}
            key={module.module.name}
            isMobile={true}
          />
        );
      } else if (module.module.name === "CollectorsToConnectWith") {
        modules.push(
          <CollectorsToConnectWith
            user={user}
            displayName={module.module.displayName}
            collectorIds={module.data.ids}
            isMobile={true}
          />
        );
      } else if (module.module.name === "CardsToConsider") {
        modules.push(
          <CardsToConsider
            user={user}
            cardIds={module.data.ids}
            displayName={module.module.displayName}
            key={module.module.name}
          />
        );
      } else if (module.module.name === "DailyPerformers") {
        modules.push(
          <DailyPerformers
            user={user}
            playerIds={module.data.ids}
            metadata={module.data.metadata}
            displayName={module.module.displayName}
            key={module.module.name}
          />
        );
      }
    });
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          position: "fixed",
          background: "white",
          zIndex: 6,
          width: "100%",
          marginLeft: "-4%",
        }}
      >
        <Tabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          aria-label="tabs"
          sx={styles.tabs}
          classes={{
            indicator: "indicator",
          }}
          TabIndicatorProps={{ children: <span /> }}
        >
          <Tab
            sx={{ ...styles.tab, mx: 1 }}
            label={<span style={styles.tab.tab}>Home</span>}
            {...a11yProps(0)}
          />
          {modules.map((module, i) => (
            <Tab
              sx={styles.tab}
              key={i}
              label={
                <span style={styles.tab.tab}>
                  {module.key === "DailyPerformers"
                    ? "Top Performers"
                    : module.props.displayName}
                </span>
              }
              {...a11yProps(i + 1)}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ height: "60px" }}></Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Welcome user={user} />
          {!!user &&
            <OnboardingBar user={user} />
          }
        </Box>
      </TabPanel>
      <>
        {modules.map((module, i) => (
          <TabPanel value={value} index={i + 1} key={i}>
            {module}
          </TabPanel>
        ))}
      </>
    </Box>
  );
};
export default MobileEntryPageContainer;
