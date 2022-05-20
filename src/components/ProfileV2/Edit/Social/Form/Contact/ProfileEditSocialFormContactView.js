import { Box, Typography, styled, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import TextField from "components/Form/TextField";
import style from "./ProfileEditSocialFormContactStyle";

const ProfileEditSocialFormContactView = ({
  control,
  errors,
  instagramUser,
  facebookName,
  youtubeUser,
  twitterUser,
  tiktokUser,
  websiteUrl,
}) => (
  <Stack direction="column" spacing={2}>
    <Controller
      name="instagramUser"
      control={control}
      defaultValue={instagramUser ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">Instagram</Typography>}
          variant="standard"
          error={!!errors?.instagramUser}
          helperText={errors?.instagramUser?.message}
          placeholder="Enter your Instagram username"
        />
      )}
    />
    <Controller
      name="facebookName"
      control={control}
      defaultValue={facebookName ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">Facebook</Typography>}
          variant="standard"
          error={!!errors?.facebookName}
          helperText={errors?.facebookName?.message}
          placeholder="Enter your Facebook username"
        />
      )}
    />
    <Controller
      name="youtubeUser"
      control={control}
      defaultValue={youtubeUser ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">Youtube</Typography>}
          variant="standard"
          error={!!errors?.youtubeUser}
          helperText={errors?.youtubeUser?.message}
          placeholder="Enter your Youtube username"
        />
      )}
    />
    <Controller
      name="twitterUser"
      control={control}
      defaultValue={twitterUser ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">Twitter</Typography>}
          variant="standard"
          error={!!errors?.twitterUser}
          helperText={errors?.twitterUser?.message}
          placeholder="Enter your Twitter username"
        />
      )}
    />
    <Controller
      name="tiktokUser"
      control={control}
      defaultValue={tiktokUser ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">TikTok</Typography>}
          variant="standard"
          error={!!errors?.tiktokUser}
          helperText={errors?.tiktokUser?.message}
          placeholder="Enter your Tiktok username"
        />
      )}
    />
    <Controller
      name="websiteUrl"
      control={control}
      defaultValue={websiteUrl ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">URL</Typography>}
          variant="standard"
          error={!!errors?.websiteUrl}
          helperText={errors?.websiteUrl?.message}
          placeholder="Enter your website url"
        />
      )}
    />
  </Stack>
);

export default ProfileEditSocialFormContactView;
