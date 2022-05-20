import { Box, styled } from "@mui/system";
import { Button, Checkbox, Typography } from "@mui/material";

import { Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import NeedHelp from "../NeedHelp";
import SocialButtons from "../SocialButtons";
import TextField from "components/Form/TextField";
import styles from "./UserRegisterStyles";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "4px",
  },
});

const UserRegisterView = ({
  doSubmit,
  control,
  errors,
  isValid,
  onFacebookLogin,
  onGoogleLogin,
  message,
  isModal
}) => (
  <Box>
    {message && <Box sx={styles.message}>{message}</Box>}
    <Box component="form" onSubmit={doSubmit} sx={styles.container}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RoundedTextField
            {...field}
            error={!!errors?.email}
            helperText={errors?.email?.message}
            label="Email address"
            sx={styles.textField}
            required
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RoundedTextField
            {...field}
            error={!!errors?.username}
            inputProps={{ maxLength: 17 }}
            helperText={errors?.username?.message}
            label="Username"
            sx={styles.textField}
            required
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RoundedTextField
            {...field}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            label="Password"
            required
            type="password"
            autoComplete="current-password"
            sx={styles.textField}
          />
        )}
      />
      <Controller
        name="passwordConfirmation"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RoundedTextField
            {...field}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            label="Confirm Password"
            required
            type="password"
            sx={styles.textField}
            autoComplete="current-password"
          />
        )}
      />
      <FormGroup sx={styles.textField}>
        <Controller
          name="agree"
          control={control}
        defaultValue={false}
          render={({ field }) => {
            return (
              <FormControlLabel
                control={<Checkbox {...field} />}
                required
                label={
                  <Typography variant="greySm">
                    I agree to the{" "}
                    <a style={{color: '#9FA2B4'}} href="/terms-of-service">Terms of Service</a> and{" "}
                    <a style={{color: '#9FA2B4'}} href="/privacy-policy">Privacy Policy</a>.
                    {!!errors?.agree &&
                      <Typography variant="error">
                        {errors?.agree?.message}
                      </Typography>}
                  </Typography>
                }
              />
            );
          }}
        />
      </FormGroup>
      <Button
        color="secondary"
        sx={styles.submitButton}
        variant="containedBlack"
        onClick={doSubmit}
        type="submit"
        disabled={!isValid}
      >
        Sign Up
      </Button>
    </Box>
    {!isModal &&
      <Box sx={styles.socialLogin}>
        <Box sx={styles.container} style={{ textAlign: "center" }}>
          <NeedHelp />
        </Box>
      </Box>
    }
  </Box>
);

export default UserRegisterView;
