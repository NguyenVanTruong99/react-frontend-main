import { Grid, Typography, styled } from "@mui/material";

import { Controller } from "react-hook-form";
import FormPanel from "components/Form/Panel";
import TextField from "components/Form/TextField";
import styles from "./UserProfileFormSocialStyles";

const GreyBorderTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #dfdfdf",
    borderRadius: "4px",
  },
});

const UserProfileFormSocialView = ({
  control,
  errors,
  isSaveEnabled,
  onSubmit,
  // fields
  websiteUrl,
  instagramUser,
  myslabsUser,
  starstockUser,
  twitterUser,
  facebookName,
  youtubeUser,
  ebayName,
  tiktokUser,
  snapchatUser,
  whatnotUser,
}) => (
  <>
    <FormPanel
      title={<Typography variant="displayName">Social Profile</Typography>}
      onSubmit={onSubmit}
      isSaveEnabled={isSaveEnabled}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controller
            name="instagramUser"
            control={control}
            defaultValue={instagramUser ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your Instagram name
                  </Typography>
                }
                error={!!errors?.instagramUser}
                helperText={errors?.instagramUser?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="twitterUser"
            control={control}
            defaultValue={twitterUser ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your Twitter name
                  </Typography>
                }
                error={!!errors?.twitterUser}
                helperText={errors?.twitterUser?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="facebookName"
            control={control}
            defaultValue={facebookName ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your Facebook name
                  </Typography>
                }
                error={!!errors?.facebookName}
                helperText={errors?.facebookName?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="tiktokUser"
            control={control}
            defaultValue={tiktokUser ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your TikTok name
                  </Typography>
                }
                error={!!errors?.tiktokUser}
                helperText={errors?.tiktokUser?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="youtubeUser"
            control={control}
            defaultValue={youtubeUser ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your YouTube name
                  </Typography>
                }
                error={!!errors?.youtubeUser}
                helperText={errors?.youtubeUser?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="websiteUrl"
            control={control}
            defaultValue={websiteUrl ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your Website URL
                  </Typography>
                }
                error={!!errors?.websiteUrl}
                helperText={errors?.websiteUrl?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="ebayName"
            control={control}
            defaultValue={ebayName ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your eBay name
                  </Typography>
                }
                error={!!errors?.ebayName}
                helperText={errors?.ebayName?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="myslabsUser"
            control={control}
            defaultValue={myslabsUser ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your MySlabs name
                  </Typography>
                }
                error={!!errors?.myslabsUser}
                helperText={errors?.myslabsUser?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="starstockUser"
            control={control}
            defaultValue={starstockUser ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your StarStock name
                  </Typography>
                }
                error={!!errors?.starstockUser}
                helperText={errors?.starstockUser?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="whatnotUser"
            control={control}
            defaultValue={whatnotUser ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Enter your Whatnot name
                  </Typography>
                }
                error={!!errors?.whatnotUser}
                helperText={errors?.whatnotUser?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </FormPanel>
  </>
);

export default UserProfileFormSocialView;
