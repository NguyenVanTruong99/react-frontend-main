import { useCallback } from "react";
import ProfileNavbarView from "./ProfileNavbarView";
import SummaryIcon from "components/Icons/Profile/Summary";
import WantlistIcon from "components/Icons/Profile/Wantlist";
import ShowcaseIcon from "components/Icons/Profile/Showcase";
import CollectionIcon from "components/Icons/Profile/Collection";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const tabs = [
  {
    value: "Summary",
    label: "Summary",
    icon: <SummaryIcon />,
  },
  {
    value: "Wantlist",
    label: "Want List",
    icon: <WantlistIcon />,
  },
  {
    value: "Showcase",
    label: "Showcase",
    icon: <ShowcaseIcon />,
  },
  {
    value: "Collection",
    label: "Collection",
    icon: <CollectionIcon />,
  },
  {
    value: "Followers",
    label: "Followers",
    icon: <PeopleAltIcon />,
  },
];

const ProfileNavbarContainer = ({ isMedium, tab, setTab }) => {
  const handleTabChange = useCallback(
    (event, newTab) => setTab(newTab),
    [setTab]
  );

  return (
    <ProfileNavbarView
      isMedium={isMedium}
      tab={tab}
      tabs={tabs}
      handleTabChange={handleTabChange}
    />
  );
};

export default ProfileNavbarContainer;
