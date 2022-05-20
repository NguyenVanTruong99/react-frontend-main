import ProfileShowcaseStatsView from "./ProfileShowcaseStatsView";
import formatNum from "utils/formatNumberToThousandth";

const ProfileShowcaseStatsContainer = ({ isMedium, showcases }) => {
  const total = formatNum(showcases.length);
  const totalViews = formatNum(
    showcases.reduce((partialSum, showcase) => partialSum + showcase.views, 0)
  );
  const values = { max: -1, mostPopular: null };
  for (let i = 0; i < showcases.length; i++) {
    if (showcases[i].views > values.max) {
      values.max = showcases[i].views;
      values.mostPopular = showcases[i].name;
    }
  }

  return (
    <ProfileShowcaseStatsView
      isMedium={isMedium}
      total={total}
      totalViews={totalViews}
      mostPopular={values.mostPopular}
    />
  );
};

export default ProfileShowcaseStatsContainer;
