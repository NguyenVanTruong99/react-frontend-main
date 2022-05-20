import { useCallback, useEffect, useState } from "react";

import DataMovementChartView from "./DataMovementChartView";
import { useTheme } from "@mui/material";

const defaultTabLabels = [
  "1d",
  "7d",
  "2w",
  "30d",
  "60d",
  "3m",
  "6m",
  "1y",
  "All",
];

const defaultData = [
  {
    name: "Monday",
    value: 4000,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "Tuesday",
    value: 3000,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: "Wednesday",
    value: 2000,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: "Thursday",
    value: 2780,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: "Friday",
    value: 1890,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: "Saturday",
    value: 2390,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: "Sunday",
    value: 3490,
    // pv: 4300,
    // amt: 2100,
  },
];

const DataMovementChartContainer = ({
  height = 300,
  data = defaultData,
  onTabChange = value => console.log(value),
  tabLabels = defaultTabLabels,
  ticks,
  Extra,
  MidExtra,
  TopExtra,
  skipMovementText,
  noData,
} = {}) => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(tabLabels.length - 1);
  const handleTabChange = useCallback(
    (event, newValue) => setSelectedTab(newValue),
    []
  );

  useEffect(() => {
    onTabChange(selectedTab);
  }, [selectedTab, onTabChange]);
  

  return (
    <DataMovementChartView
      height={height}
      selectedTab={selectedTab}
      onTabChange={handleTabChange}
      tabLabels={tabLabels}
      data={data}
      strokeColor={theme.palette.primary.main}
      ticks={ticks}
      Extra={Extra}
      MidExtra={MidExtra}
      TopExtra={TopExtra}
      skipMovementText={skipMovementText}
      noData={noData}
    />
  );
};

export default DataMovementChartContainer;
