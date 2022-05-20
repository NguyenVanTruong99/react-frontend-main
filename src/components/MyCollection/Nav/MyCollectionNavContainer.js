import MyCollectionNavView from "./MyCollectionNavView";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyCollectionNavContainer = ({ initialTab = "/my-collection" }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [currentTab] = useState(initialTab);

  const handleTabChange = (e, newTab) => {
    // navigate(newTab);
  };

  return (
    <MyCollectionNavView
      currentTab={currentTab}
      onTabChange={handleTabChange}
      theme={theme}
    />
  );
};

export default MyCollectionNavContainer;
