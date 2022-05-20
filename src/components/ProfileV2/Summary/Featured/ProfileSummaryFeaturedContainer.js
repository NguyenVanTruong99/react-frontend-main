import { useMemo } from "react";
import ProfileSummaryFeaturedView from "./ProfileSummaryFeaturedView";

const sliderSettings = {
  className: "center",
  centerMode: true,
  centerPadding: "24px",
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProfileSummaryFeaturedContainer = ({ isMedium, showcases }) => {
  const featuredShowcases = useMemo(
    () => showcases.filter(showcase => showcase.isFeatured),
    [showcases]
  );

  return (
    <ProfileSummaryFeaturedView
      isMedium={isMedium}
      featuredShowcases={featuredShowcases}
      sliderSettings={sliderSettings}
    />
  );
};

export default ProfileSummaryFeaturedContainer;
