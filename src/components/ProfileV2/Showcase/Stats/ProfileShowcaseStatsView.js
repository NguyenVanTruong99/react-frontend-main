import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import style from "./ProfileShowcaseStatsStyle";
import ShowcaseLogo from "assets/images/showcase_flex.png";

const ProfileShowcaseStatsView = ({
  isMedium,
  total,
  totalViews,
  mostPopular,
}) => (
  <Box sx={style.profileStatsBox}>
    <Box sx={style.profileStatsHeaderBox}>
      <img src={ShowcaseLogo} alt="" />
      <Typography sx={style.profileStatsHeaderText}>Overview</Typography>
    </Box>
    <Box sx={style.showcaseStatsCardsContainer}>
      <Stack direction="row" spacing={2} sx={style.profileStatsStack}>
        <Box sx={style.showcaseStatsCard}>
          <Box sx={style.showcaseStatsCardValueBox}>
            <Typography variant="h2" sx={style.showcaseStatsCardValue}>
              {total}
            </Typography>
          </Box>
          <Typography sx={style.showcaseStatsCardLabel}>Total</Typography>
        </Box>
        <Box sx={style.showcaseStatsCard}>
          <Box sx={style.showcaseStatsCardValueBox}>
            <Typography variant="h2" sx={style.showcaseStatsCardValue}>
              {totalViews}
            </Typography>
          </Box>
          <Typography sx={style.showcaseStatsCardLabel}>Total Views</Typography>
        </Box>
        {!isMedium && mostPopular && (
          <Box sx={style.showcaseStatsCard}>
            <Box sx={style.showcaseStatsCardValueBox}>
              <Typography variant="h4" sx={style.showcaseStatsCardMostPopular}>
                {mostPopular}
              </Typography>
            </Box>
            <Typography sx={style.showcaseStatsCardLabel}>
              Most Popular
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  </Box>
);

export default ProfileShowcaseStatsView;
