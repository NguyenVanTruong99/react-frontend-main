import "components/Data/MovementChart/DataMovement.css";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Grid, Tab, Tabs, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { DateTime } from "luxon";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";

const formatDate = date => {
  if (date) {
    const year = DateTime.now().year;
    const lDate = DateTime.fromFormat(date, "M/d/yyyy");
    return lDate.year === year
      ? lDate.toFormat("MMM d")
      : lDate.toFormat("MMM d, yy");
  }
  return 0;
};

//function to abbreviate number over 1000 with k
const abbreviateNumber = number => {
  if (number < 1000) return formatNumberAsCurrency(number);
  if (number >= 1000 && number < 1000000)
    return "$" + (number / 1000).toFixed(0) + "k";
};

const DataMovementChartView = ({
  height,
  data,
  selectedTab,
  onTabChange,
  tabLabels,
  strokeColor,
  ticks,
  Extra,
  MidExtra,
  TopExtra,
  skipMovementText,
  noData,
}) => (
  <Box
    sx={theme => ({
      overflow: "hidden",
      // borderLeft: {
      //   lg: `2px solid ${theme.palette.divider}`,
      // },
      paddingLeft: {
        lg: skipMovementText ? 0 : 4,
      },
    })}
  >
    <Box
      sx={{
        alignItems: "center",
        display: {
          xs: "block",
          xl: "flex",
        },
        flexDirection: "column",
      }}
    >
      {/* <Box sx={{mb: 3}}>
        <Typography variant="h4" color={"text.primary"}>Movement</Typography>
      </Box> */}
      <Box
        sx={{
          minWidth: 120,
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <FormControl sx={{ mx: "16px", width: "94%", mb: "16px" }}>
          <Select
            value={selectedTab}
            onChange={event => onTabChange(event, event.target.value)}
          >
            {tabLabels.map((label, i) => (
              <MenuItem key={i} value={i}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          flex: 1,
          mb: 4,
          ml: {
            xs: 0,
            md: 0,
          },
        }}
      >
        {/* <AppBar
          position="static"
          sx={{
            backgroundColor: theme => theme.palette.background.paper,
            boxShadow: "none",
          }}
        > */}
        <Tabs
          value={selectedTab}
          onChange={onTabChange}
          // indicatorColor="primary"
          sx={{
            // color: theme => theme.palette.text.primary,
            //TODO add back to card detail
            // borderTop: '1px solid #DFE0EB',
            // borderBottom: '1px solid #DFE0EB',
            // mx: 3,
            ml: !skipMovementText ? 0 : 4,
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .Mui-selected .MuiTypography-root": {
              borderBottom: "3px solid #258aff",
            },
          }}
          // centered={true}
          variant={"fullWidth"}
        >
          {tabLabels.map((label, i) => (
            <Tab
              key={i}
              style={{
                textTransform: "none",
                marginLeft: "-10px",
                marginRight: "-5px",
              }}
              label={<Typography variant="chartGrey">{label}</Typography>}
            />
          ))}
        </Tabs>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            pl: skipMovementText ? 0 : 4,
          }}
        >
          {TopExtra}
        </Box>
        {/* </AppBar> */}
      </Box>
    </Box>
    <Grid container>
      <Grid item xs={12} md={!!Extra ? 8 : 12}>
        {MidExtra}
        {!noData && (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={strokeColor} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                minTickGap={75}
                axisLine={false}
                tickLine={false}
                interval="preserveEnd"
                tickFormatter={date => formatDate(date)}
              />
              {/* <YAxis ticks={data.map(d => `$${d.value}`)} /> */}
              <YAxis
                minTickGap={25}
                tickFormatter={num => abbreviateNumber(num)}
                tickLine={false}
                domain={["auto", "auto"]}
                scale={"linear"}
                axisLine={false}
                interval="preserveStartEnd"
                padding={{ top: 10 }}
              />
              <Tooltip
                formatter={(value, name, props) =>
                  formatNumberAsCurrency(value)
                }
                labelFormatter={date => formatDate(date)}
              />
              {/* <Legend /> */}
              {/* <Area type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
              <Area
                type="monotone"
                fill="url(#color)"
                strokeWidth={3}
                dataKey="value"
                stroke={strokeColor}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Grid>
      {!!Extra && (
        <Grid item xs="auto">
          {Extra}
        </Grid>
      )}
    </Grid>
  </Box>
);

export default DataMovementChartView;
