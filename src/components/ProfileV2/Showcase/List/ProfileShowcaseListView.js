import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./ProfileShowcaseListStyle";
import ShowcaseCard from "components/Showcase/Card";

const ProfileShowcaseListView = ({
  firstFeatured,
  featuredShowcases,
  unfeaturedShowcases,
}) => (
  <Box sx={style.container}>
    {(!!firstFeatured || featuredShowcases.length > 0) && (
      <Box sx={style.containerLabelBox}>
        <Typography variant="h4" sx={style.containerLabel}>
          Featured
        </Typography>
      </Box>
    )}
    {!!firstFeatured && (
      <Box sx={style.firstFeaturedBox}>
        <ShowcaseCard
          showcase={firstFeatured}
          profileView={true}
          featured={true}
        />
      </Box>
    )}
    {featuredShowcases.length > 0 && (
      <Box sx={style.showcasesBox}>
        {featuredShowcases.map(showcase => (
          <Box sx={style.showcaseBox} key={showcase.id}>
            <ShowcaseCard
              showcase={showcase}
              profileView={true}
              featured={true}
            />
          </Box>
        ))}
      </Box>
    )}
    {unfeaturedShowcases.length > 0 && (
      <>
        <Box sx={style.showcasesHeaderBox}>
          <Typography variant="h4" sx={style.containerLabel}>
            All Showcases
          </Typography>
          <Typography variant="h4" sx={style.numShowcases}>
            {unfeaturedShowcases.length}
          </Typography>
        </Box>
        <Box sx={style.showcasesBox}>
          {unfeaturedShowcases.map(showcase => (
            <Box sx={style.showcaseBox} key={showcase.id}>
              <ShowcaseCard
                showcase={showcase}
                profileView={true}
                featured={false}
              />
            </Box>
          ))}
        </Box>
      </>
    )}
  </Box>
);

export default ProfileShowcaseListView;
