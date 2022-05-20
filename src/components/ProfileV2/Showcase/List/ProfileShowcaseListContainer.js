import { useMemo } from "react";
import ProfileShowcaseListView from "./ProfileShowcaseListView";

const ProfileShowcaseListContainer = ({ isMedium, visibleShowcases }) => {
  const filteredShowcases = useMemo(
    () => visibleShowcases.filter(showcase => showcase.isFeatured),
    [visibleShowcases]
  );
  const firstFeatured =
    filteredShowcases.length % 2 === 1 ? filteredShowcases[0] : null;
  const featuredShowcases = firstFeatured
    ? filteredShowcases.slice(1)
    : filteredShowcases;
  const unfeaturedShowcases = useMemo(
    () => visibleShowcases.filter(showcase => !showcase.isFeatured),
    [visibleShowcases]
  );

  return (
    <ProfileShowcaseListView
      isMedium={isMedium}
      firstFeatured={firstFeatured}
      featuredShowcases={featuredShowcases}
      unfeaturedShowcases={unfeaturedShowcases}
    />
  );
};

export default ProfileShowcaseListContainer;
