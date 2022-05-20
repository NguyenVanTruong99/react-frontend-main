import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Controller } from "react-hook-form";
import TextField from "components/Form/TextField";
import styles from "./ResetStyles";

const ResetView = ({ doSubmit, control, errors, isValid, token }) => (
  <Box component="form" onSubmit={doSubmit} sx={styles.container}>
    <Controller
      name="password"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors?.password}
          helperText={
            errors?.password?.message.includes("resetPasswordToken")
              ? "Invalid token"
              : errors?.password?.message
          }
          label="New Password"
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
        <TextField
          {...field}
          error={!!errors?.passwordConfirmation}
          helperText={errors?.passwordConfirmation?.message}
          label="Confirm Password"
          required
          type="password"
          sx={styles.textField}
          autoComplete="current-password"
        />
      )}
    />
    <Controller
      name="resetPasswordToken"
      control={control}
      defaultValue={token}
      render={({ field }) => <></>}
    />

    <Button
      color="secondary"
      sx={styles.submitButton}
      variant="containedBlack"
      type="submit"
      onClick={doSubmit}
      disabled={!isValid}
    >
      Reset Password
    </Button>
  </Box>
);

export default ResetView;
