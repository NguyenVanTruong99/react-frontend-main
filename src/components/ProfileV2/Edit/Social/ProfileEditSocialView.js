import { Box, Stack, Button, Grid, Divider } from "@mui/material";
import style from "./ProfileEditSocialStyle";
import EditAvatar from "../../Avatar/Edit";
import ProfileEditSocialFormContact from "./Form/Contact";
import ProfileEditSocialFormBuy from "./Form/Buy";
import EditActions from "../Actions";

const ProfileEditSocialView = ({
  control,
  errors,
  isLoading,
  isSaveEnabled,
  onSubmit,
  onClose,
  instagramUser,
  facebookName,
  youtubeUser,
  twitterUser,
  tiktokUser,
  websiteUrl,
  ebayName,
  myslabsUser,
  whatnotUser,
}) => (
  <Box sx={style.editSocialContainer}>
    <Grid container sx={style.editSocialGrid}>
      <Grid item sm={6} xs={12} sx={style.editSocialGridItem}>
        <Box sx={style.editSocialFormContactBox}>
          <ProfileEditSocialFormContact
            control={control}
            errors={errors}
            instagramUser={instagramUser}
            facebookName={facebookName}
            youtubeUser={youtubeUser}
            twitterUser={twitterUser}
            tiktokUser={tiktokUser}
            websiteUrl={websiteUrl}
          />
        </Box>
      </Grid>
      <Divider
        orientation="vertical"
        absolute={true}
        sx={style.editSocialDivider}
      />
      <Grid item sm={6} xs={12} sx={style.editSocialGridBuyItem}>
        <Box sx={style.editSocialFormBuyBox}>
          <ProfileEditSocialFormBuy
            control={control}
            errors={errors}
            ebayName={ebayName}
            myslabsUser={myslabsUser}
            whatnotUser={whatnotUser}
          />
        </Box>
      </Grid>
    </Grid>
    <EditActions
      isSaveEnabled={isSaveEnabled}
      onSubmit={onSubmit}
      onClose={onClose}
    />
  </Box>
);

export default ProfileEditSocialView;
