import { Divider, Grid, MenuItem, Typography, styled } from "@mui/material";

import { Controller } from "react-hook-form";
import FormPanel from "components/Form/Panel";
import Select from "components/Form/Select";
import TextField from "components/Form/TextField";
import styles from "./UserProfileFormPrivateStyles";

const GreyBorderTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #dfdfdf",
    borderRadius: "4px",
  },
});

const UserProfileFormPrivate = ({
  control,
  countries,
  errors,
  isSaveEnabled,
  onSubmit,
  states,
  // fields
  firstName,
  lastName,
  email,
  phoneNumber,
  address1,
  address2,
  city,
  state,
  country,
  zip,
}) => (
  <>
    <FormPanel
      title={<Typography variant="displayName">Private Profile</Typography>}
      isSaveEnabled={isSaveEnabled}
      onSubmit={onSubmit}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controller
            name="firstName"
            control={control}
            defaultValue={firstName ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">First Name</Typography>
                }
                error={!!errors?.firstName}
                helperText={errors?.firstName?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="lastName"
            control={control}
            defaultValue={lastName ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={<Typography variant="placeholder">Last Name</Typography>}
                error={!!errors?.lastName}
                helperText={errors?.lastName?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="email"
            control={control}
            defaultValue={email ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                disabled
                sx={styles.textInput}
                label={<Typography variant="placeholder">Email</Typography>}
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue={phoneNumber ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">Phone Number</Typography>
                }
                error={!!errors?.phoneNumber}
                helperText={errors?.phoneNumber?.message}
              />
            )}
          />
        </Grid>
        <Divider sx={{ marginTop: 4, marginBottom: 6, width: "98%" }} />
        <Grid item xs={12} md={6}>
          <Controller
            name="address1"
            control={control}
            defaultValue={address1 ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={<Typography variant="placeholder">Address 1</Typography>}
                error={!!errors?.address1}
                helperText={errors?.address1?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="address2"
            control={control}
            defaultValue={address2 ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={<Typography variant="placeholder">Address 2</Typography>}
                error={!!errors?.address2}
                helperText={errors?.address2?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="city"
            control={control}
            defaultValue={city ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={<Typography variant="placeholder">City</Typography>}
                error={!!errors?.city}
                helperText={errors?.city?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="state"
            control={control}
            defaultValue={state ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
              select
                {...field}
                sx={styles.textInput}
                label={<Typography variant="placeholder">State</Typography>}
                error={!!errors?.state}
                helperText={errors?.state?.message}
              >
                {states.map((state, idx) => (
                  <MenuItem key={idx} value={state.name}>
                    {state.name}
                  </MenuItem>
                ))}
              </GreyBorderTextField>
              // <Select
              //   {...field}
              //   sx={{...styles.textInput, width: "97%"}}
              //   label={
              //     <Typography variant="placeholder">State</Typography>
              //   }
              //   error={!!errors?.state}
              //   helperText={errors?.state?.message}
              // >
              //   {states.map((state, idx) => (
              //     <MenuItem key={idx} value={state.name}>
              //       {state.name}
              //     </MenuItem>
              //   ))}
              // </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="zip"
            control={control}
            defaultValue={zip ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
                {...field}
                sx={styles.textInput}
                label={
                  <Typography variant="placeholder">
                    Zip / Postal Code
                  </Typography>
                }
                error={!!errors?.zip}
                helperText={errors?.zip?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="country"
            control={control}
            defaultValue={country ?? ""}
            render={({ field }) => (
              <GreyBorderTextField
              select
                {...field}
                sx={styles.textInput}
                label={<Typography variant="placeholder">Country</Typography>}
                error={!!errors?.country}
                helperText={errors?.country?.message}
              >
                {countries.map((country, idx) => (
                  <MenuItem key={idx} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </GreyBorderTextField>
              // <Select
              //   {...field}
              //   sx={{ ...styles.textInput, width: "97%" }}

              //   label={
              //     <Typography variant="placeholder">Select Country</Typography>
              //   }
              //   error={!!errors?.country}
              //   helperText={errors?.country?.message}
              // >
              //   {countries.map((country, idx) => (
              //     <MenuItem key={idx} value={country.name}>
              //       {country.name}
              //     </MenuItem>
              //   ))}
              // </Select>
            )}
          />
        </Grid>
      </Grid>
    </FormPanel>
  </>
);

export default UserProfileFormPrivate;
