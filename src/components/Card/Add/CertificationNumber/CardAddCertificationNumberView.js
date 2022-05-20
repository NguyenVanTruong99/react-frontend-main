import {
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/system";
import { Controller } from "react-hook-form";
import styles from "./CardAddCertificationNumberStyles";

const services = [
  { label: "BGS", value: "BGS" },
  { label: "PSA", value: "PSA" },
  { label: "SGC", value: "SGC" },
];

const CardAddCertificationNumberView = ({
  control,
  doSubmit,
  errors,
  isValid,
  register,
}) => (
  <Box component="form" onSubmit={doSubmit} sx={styles.form}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Controller
          name="service"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              select
              label={<Typography variant="placeholder">Service</Typography>}
              InputLabelProps={{ required: false }}
              required
              fullWidth
            >
              {services.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={9} md={8}>
        <Controller
          name="certNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.certNumber}
              helperText={errors?.certNumber?.message}
              InputLabelProps={{ required: false }}
              label={
                <Typography variant="placeholder">
                  Enter Certification Number
                </Typography>
              }
              required
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid item xs={3} md={1}>
        <IconButton disabled={!isValid} onClick={doSubmit} color="primary">
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  </Box>
);

export default CardAddCertificationNumberView;
