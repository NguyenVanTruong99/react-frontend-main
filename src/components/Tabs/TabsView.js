import { Tabs as MUITabs, Tab as MUITab } from "@mui/material";
import styles from "./TabsStyles";

const TabsView = ({
  currentTab,
  handleTabChange,
  tabs,
  sx = {},
  classes = {},
  variant = null,
  orientation = null,
}) => (
  <MUITabs
    onChange={handleTabChange}
    sx={{ ...styles.tabs, ...(sx.tabs || {}) }}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    value={currentTab}
    classes={{ flexContainer: classes?.flexContainer }}
    variant="scrollable"
    orientation={orientation || "horizontal"}
  >
    {tabs.map((tab, idx) =>
      tab.icon ? (
        <MUITab
          key={idx}
          sx={{ ...styles.tab, ...(sx.tab || {}) }}
          value={tab.value}
          icon={tab.icon}
        />
      ) : (
        <MUITab
          key={idx}
          label={tab.label}
          sx={{ ...styles.tab, ...(sx.tab || {}) }}
          value={tab.value}
        />
      )
    )}
  </MUITabs>
);

export default TabsView;
