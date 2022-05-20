import { Box, Tabs, Tab } from "@mui/material";
import style from "./ProfileNavbarStyle";

const ProfileNavbarView = ({ isMedium, tab, tabs, handleTabChange }) => (
  <Box sx={style.profileNavbarContainer}>
    <Tabs
      onChange={handleTabChange}
      value={tab}
      variant="scrollable"
      orientation={isMedium ? "horizontal" : "vertical"}
    >
      {tabs.map((tab, idx) => (
        <Tab
          key={idx}
          label={isMedium ? null : tab.label}
          icon={tab.icon}
          value={tab.value}
          sx={style.profileNavbarTabButton}
        />
      ))}
    </Tabs>
  </Box>
);

export default ProfileNavbarView;
