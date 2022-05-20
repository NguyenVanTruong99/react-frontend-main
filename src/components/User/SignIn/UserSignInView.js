import { Button, Checkbox, styled } from "@mui/material";

import { Box } from "@mui/system";
import { Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Link } from "react-router-dom";
import NeedHelp from "../NeedHelp";
import SocialButtons from "../SocialButtons/SocialButtons";
import TextField from "components/Form/TextField";
import styles from "./UserSignInStyles";
import theme from "theme.js";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "4px",
  },
});

const UserSignInView = ({
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
            sx={styles.textField}
            autoComplete="current-password"
          />
        )}
      />
      <FormGroup sx={styles.textField}>
        <Controller
          name="remember"
          control={control}
          render={({ field }) => {
            return (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Remember me"
              />
            );
          }}
        />
      </FormGroup>
      <Button
        color="secondary"
        sx={styles.submitButton}
        variant="containedBlack"
        type="submit"
        onClick={doSubmit}
        disabled={!isValid}
      >
        Sign In
      </Button>
      <Box sx={styles.forgotPassword}>
        <Link to="/forgot-password" style={{ color: theme.palette.grey.B200 }}>
          Forgot Password
        </Link>
      </Box>
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

export default UserSignInView;
