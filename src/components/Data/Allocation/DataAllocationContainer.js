import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import { Box } from "@mui/system";
import DataAllocationView from "./DataAllocationView";
import Tooltip from "@mui/material/Tooltip";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";

const COLORS = ["#1f8e9b", "#39c1cb", "#2c475c", "#f5a837", "#8d9db2"];

const data01 = [
  { name: "Basketball", value: 400 },
  { name: "Football", value: 300 },
  { name: "Baseball", value: 300 },
  { name: "Hockey", value: 200 },
  { name: "Soccer", value: 200 },
];

const defaultTabLabels = ["Sport", "Atheletes", "Cards"];

function shortenText(text) {
  if (text.length > 13) {
    return text.substring(0, 13) + "...";
  }
  return text;
}

const DataAllocationContainer = ({
  width = 440,
  height = 340,
  data = data01,
  colors = COLORS,
  onTabChange = value => console.log(value),
  tabLabels = defaultTabLabels,
  isMoney = true,
  isSport = false,
} = {}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback(
    (event, newValue) => setSelectedTab(newValue),
    []
  );

  const renderLegend = useCallback(
    ({ payload }) => (
      <Box component="ul" sx={{ m: 0, p: 0, mt: 6, mr: 2 }}>
        {payload.map((entry, index) => (
          <Box
            component="li"
            key={`item-${index}`}
            sx={{
              listStyleType: "none",
              display: "flex",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                mr: 1,
                backgroundColor: entry.color,
                borderRadius: theme => theme.shape.borderRadius,
              }}
            />
            <Box>
              <Tooltip
                followCursor
                disableHoverListener={
                  !(selectedTab === 1) && entry.value.length <= 12
                }
                title={<Typography>{entry.value}</Typography>}
              >
                <Typography variant="chart" color="text.primary">
                  {selectedTab === 1 || entry.value.length > 12
                    ? shortenText(entry.value)
                    : entry.value === "Raw 0"
                    ? "Raw"
                    : entry.value}
                </Typography>
              </Tooltip>
              <Typography variant="caption" color="grey.500">
                {!!isMoney
                  ? formatNumberAsCurrency(entry.payload.value)
                  : entry.payload.value}{" "}
                &middot; {parseFloat(entry.payload.percent * 100).toFixed(0)}%
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    ),
    [isMoney, selectedTab, isSport]
  );

  useEffect(() => {
    onTabChange(selectedTab);
  }, [selectedTab, onTabChange]);

  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = (data, index) => {
    setActiveIndex(null);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")) ? true : false;

  return (
    <DataAllocationView
      selectedTab={selectedTab}
      onTabChange={handleTabChange}
      colors={colors}
      data={data}
      width={width}
      height={height}
      tabLabels={tabLabels}
      renderLegend={renderLegend}
      activeIndex={activeIndex}
      onPieEnter={onPieEnter}
      onPieLeave={onPieLeave}
      isMobile={isMobile}
    />
  );
};

export default DataAllocationContainer;
