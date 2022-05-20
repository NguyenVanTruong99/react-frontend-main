import { Box, Typography, styled } from "@mui/material";

import { Controller } from "react-hook-form";
import FormPanel from "components/Form/Panel";
import TextField from "components/Form/TextField";
import styles from "./UserProfileFormPublicStyles";

const GreyBorderTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #dfdfdf",
    borderRadius: "4px",
  },
});

const UserProfileFormPublicView = ({
  bio,
  control,
  errors,
  isSaveEnabled,
  location,
  onSubmit,
  username,
}) => (
  <>
    <FormPanel
      title={<Typography variant="displayName">Public Profile</Typography>}
      isSaveEnabled={isSaveEnabled}
      onSubmit={onSubmit}
    >
      <Controller
        name="username"
        control={control}
        defaultValue={username ?? ""}
        render={({ field }) => (
          <GreyBorderTextField
            {...field}
            sx={styles.textInput}
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
          <GreyBorderTextField
            {...field}
            sx={styles.textInput}
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
          <GreyBorderTextField
            {...field}
            sx={styles.textInput}
            error={!!errors?.bio}
            helperText={errors?.bio?.message}
            label="Biography"
          />
        )}
      />
    </FormPanel>
  </>
);

export default UserProfileFormPublicView;
