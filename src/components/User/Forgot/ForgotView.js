import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Controller } from "react-hook-form";
import NeedHelp from "../NeedHelp";
import TextField from "components/Form/TextField";
import styles from "./ForgotStyles";

const ForgotView = ({ doSubmit, control, errors, isValid }) => (
  <Box component="form" onSubmit={doSubmit} sx={styles.container}>
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors?.email}
          helperText={errors?.email?.message}
          label="Email address"
          sx={styles.textField}
          required
        />
      )}
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
    <NeedHelp />
  </Box>
);

export default ForgotView;
