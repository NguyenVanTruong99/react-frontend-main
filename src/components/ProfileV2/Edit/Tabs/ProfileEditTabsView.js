import { Box } from "@mui/material";
import style from "./ProfileEditTabsStyle";
import Tabs from "components/Tabs";

const ProfileEditTabsView = ({ currentTab, handleTabChange, tabs }) =>
  <Tabs
    currentTab={currentTab}
    handleTabChange={handleTabChange}
    tabs={tabs}
    sx={ style.tabs }
  />

  
export default ProfileEditTabsView;
  