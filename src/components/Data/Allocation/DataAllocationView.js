import { AppBar, Tab, Tabs, Typography } from "@mui/material";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
} from "recharts";

import { Box } from "@mui/system";

const DataAllocationView = ({
  width,
  height,
  data,
  colors,
  selectedTab,
  onTabChange,
  tabLabels,
  renderLegend,
  activeIndex,
  onPieEnter,
  onPieLeave,
  isMobile,
  renderActiveShape = props => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
      cornerRadius,
    } = props;
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 1}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          cornerRadius={cornerRadius}
        />
      </g>
    );
  },
}) => (
  <Box>
    <Box
      sx={{
        alignItems: "center",
        display: {
          xs: "block",
          xl: "flex",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          mb: 4,
          ml: {
            xs: 0,
            md: 4,
          },
        }}
      >
        {/* <AppBar 
          position="static"
          sx={{
            backgroundColor: theme => theme.palette.background.paper,
            boxShadow: "none"
          }}
        > */}
        <Tabs
          value={selectedTab}
          onChange={onTabChange}
          // indicatorColor="primary"
          // sx={{color: theme => theme.palette.text.primary}}
          // variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .Mui-selected .MuiTypography-root": {
              borderBottom: "3px solid #258aff",
            },
          }}
        >
          {tabLabels.map((label, i) => (
            <Tab
              key={i}
              label={<Typography variant="cardMd">{label}</Typography>}
            />
          ))}
        </Tabs>
        {/* </AppBar> */}
      </Box>
    </Box>
    <Box sx={{ position: "relative", top: -40, pl: { xs: "10px", md: 0 } }}>
      <ResponsiveContainer width="100%" height={isMobile ? 290 : height}>
        <PieChart width={width} height={height}>
          <Legend
            content={renderLegend}
            layout="vertical"
            align="left"
            verticalAlign="top"
          />
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={isMobile ? 50 : 70}
            outerRadius={isMobile ? 85 : 105}
            cornerRadius={10}
            fill="#82ca9d"
            blendStroke={false}
            // onMouseEnter={onPieEnter}
            // onMouseLeave={onPieLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                strokeWidth={8}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  </Box>
);

export default DataAllocationView;
