import { Box, Typography, Stack } from "@mui/material";

import { Controller } from "react-hook-form";
import TextField from "components/Form/TextField";
import style from "./ProfileEditBasicFormStyle";

const ProfileEditBasicFormView = ({
  bio,
  control,
  errors,
  location,
  username,
}) => (
  <Stack direction="column" spacing={2}>
    <Controller
      name="username"
      control={control}
      defaultValue={username ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label="Username"
          inputProps={{ maxLength: 17 }}
          onInput={e => {
            e.target.value = e.target.value.toLowerCase();
          }}
          error={!!errors?.username}
          helperText={errors?.username?.message}
        />
      )}
    />
    <Controller
      name="location"
      control={control}
      defaultValue={location ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          error={!!errors?.location}
          helperText={errors?.location?.message}
          label="Location"
        />
      )}
    />
    <Controller
      name="bio"
      control={control}
      defaultValue={bio ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInputBio}
          error={!!errors?.bio}
          helperText={
            errors?.bio?.message ||
            "A short one-liner about you. Limit 125 characters"
          }
          FormHelperTextProps={{
            style: errors?.bio?.message ? style.helperError : style.helper,
          }}
          rows={2}
          multiline
          label="Short Bio"
        />
      )}
    />
  </Stack>
);

export default ProfileEditBasicFormView;
