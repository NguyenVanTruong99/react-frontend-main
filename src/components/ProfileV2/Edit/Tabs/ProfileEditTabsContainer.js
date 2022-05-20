import { useCallback } from "react";
import ProfileEditTabsView from "./ProfileEditTabsView";

const tabs = [
  {
    value: "Basic",
    label: "Basic",
  },
  {
    value: "Social",
    label: "Social",
  },
  {
    value: "Advanced",
    label: "Advanced",
  },
];

const ProfileEditTabsContainer = ({ isMedium, currentTab, setCurrentTab }) => {
  const handleTabChange = useCallback(
    (event, newTab) => {
      setCurrentTab(newTab);
    },
    [setCurrentTab]
  );

  return (
    <ProfileEditTabsView
      currentTab={currentTab}
      handleTabChange={handleTabChange}
      tabs={tabs}
    />
  );
};

export default ProfileEditTabsContainer;
