import ShowcaseImg from "assets/images/icons/showcase.png";
import Tabs from "components/Tabs";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

const MyCollectionNavView = ({ currentTab, theme, onTabChange }) => (
  <Tabs
    currentTab={currentTab}
    handleTabChange={onTabChange}
    sx={{
      tabs: {},
      tab: {
        mb: 0,
        px: 1.5,
        zIndex: 5,
        "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
          fontWeight: "bold",
          color: theme.palette.text.white,
        },
      },
    }}
    tabs={[
      {
        value: "/my-collection",
        label: (
          <Typography
            variant="medium2"
            sx={{ fontSize: { xs: 14, md: 18 }, color: "#E0E0E0" }}
          >
            Dashboard
          </Typography>
        ),
      },
      {
        value: "",
        label: (
          <Tooltip
            title={<Typography>Coming Soon</Typography>}
            enterTouchDelay={0}
          >
            <Typography
              variant="medium2"
              sx={{ fontSize: { xs: 14, md: 18 }, color: "#E0E0E0" }}
            >
              Movers
            </Typography>
          </Tooltip>
        ),
      },
      {
        value: "",
        label: (
          <Tooltip
            title={<Typography>Coming Soon</Typography>}
            enterTouchDelay={0}
          >
            <Typography
              variant="medium2"
              sx={{ fontSize: { xs: 14, md: 18 }, color: "#E0E0E0" }}
            >
              Insights
            </Typography>
          </Tooltip>
        ),
      },
      // { value: '/my-showcases', label: 'Showcase', icon: <img style={{ height: 18, marginTop: -5 }} src={ShowcaseImg} alt="showcase" /> },
    ]}
  />
);

export default MyCollectionNavView;
