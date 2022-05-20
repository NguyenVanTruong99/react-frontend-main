import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import style from "./ProfileSummaryFeaturedStyle";
import ShowcaseCard from "components/Showcase/Card";

const ProfileSummaryFeaturedView = ({
  isMedium,
  featuredShowcases,
  sliderSettings,
}) => (
  <Box sx={style.featuredContainer}>
    <Typography variant="body1" sx={style.featuredTitle}>
      My Featured
    </Typography>
    {isMedium ? (
      <Slider {...sliderSettings}>
        {featuredShowcases.map((showcase, i) => (
          <ShowcaseCard
            showcase={showcase}
            profileView={true}
            featured={true}
          />
        ))}
      </Slider>
    ) : (
      <Box sx={style.featuredList}>
        {featuredShowcases.map(showcase => (
          <Box sx={style.featuredItemBox} key={showcase.id}>
            <ShowcaseCard
              showcase={showcase}
              profileView={true}
              featured={true}
            />
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

export default ProfileSummaryFeaturedView;
