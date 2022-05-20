import "./style.css";

import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";

import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { Box } from "@mui/system";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTime } from "luxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import Switch from "components/Switch";
import UserCardDetailSelection from "components/UserCardDetail/Selection";
import { forwardRef } from "react";
import styles from "./UserCardDetailsFormStyles";

const services = [
  { label: "BGS", value: "BGS" },
  { label: "PSA", value: "PSA" },
  { label: "SGC", value: "SGC" },
];

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

//array of all possible grades objects. 1-10 incremented by .5 with label and value
const grades = [
  { label: "1", value: "1" },
  { label: "1.5", value: "1.5" },
  { label: "2", value: "2" },
  { label: "2.5", value: "2.5" },
  { label: "3", value: "3" },
  { label: "3.5", value: "3.5" },
  { label: "4", value: "4" },
  { label: "4.5", value: "4.5" },
  { label: "5", value: "5" },
  { label: "5.5", value: "5.5" },
  { label: "6", value: "6" },
  { label: "6.5", value: "6.5" },
  { label: "7", value: "7" },
  { label: "7.5", value: "7.5" },
  { label: "8", value: "8" },
  { label: "8.5", value: "8.5" },
  { label: "9", value: "9" },
  { label: "9.5", value: "9.5" },
  { label: "10", value: "10" },
];

const UserCardDetailsFormView = ({
  userCard,
  control,
  errors,
  isValid,
  onSubmit,
  onSkip,
  grades,
  totalCost,
  cardGrades,
  allGrades,
  onFocus,
  onBlur,
  focus,
  hasValue,
  setValue,
  handleGradeToggle,
  hasGradeChecked,
  watch,
  dateValue,
  handleDateChange,
  editing,
  onCancel,
  acquisitionDate,
  setAcquisitionDate,
}) => (
  <>
    <Box sx={styles.wrapper}>
      {!userCard.isCertified && (
        <Box sx={styles.section}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="addLg" sx={{ mr: 2 }}>
              Graded?
            </Typography>
            <Switch onChange={handleGradeToggle} />
          </Box>
        </Box>
      )}
      {!userCard.isCertified && hasGradeChecked && (
        <Box sx={styles.section}>
          {/* <Typography variant="addLg" sx={styles.title}>Grading Info</Typography> */}
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
                    label={
                      <Typography variant="placeholder">Service</Typography>
                    }
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
                name="gradeId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label={
                      <Typography variant="placeholder">
                        {watch("service")} Grade
                      </Typography>
                    }
                    InputLabelProps={{ required: false }}
                    required
                    fullWidth
                  >
                    {allGrades
                      .filter(
                        grade => grade.gradeVendor.name === watch("service")
                      )
                      .sort((a, b) => {
                        return b.grade - a.grade;
                      })
                      .map(grade => (
                        <MenuItem key={grade.id} value={grade.id}>
                          {grade.gradeDisplay}
                        </MenuItem>
                      ))}
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        </Box>
      )}
      <Box sx={styles.section}>
        <Typography sx={styles.title} variant="addLg">
          Private Card Details
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={3}>
            <Controller
              name="acquiredAt"
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterLuxon}>
                  <DatePicker
                    {...field}
                    label={
                      <Typography variant="placeholderSm">
                        Date Acquired
                      </Typography>
                    }
                    fullWidth
                    value={acquisitionDate}
                    onChange={value => {
                      setValue("acquiredAt", value);
                      setAcquisitionDate(
                        DateTime.fromISO(value, { zone: "utc" })
                      );
                    }}
                    renderInput={params => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                // <TextField
                //   {...field}
                //   type="date"
                //   label={
                //     <Typography variant="placeholderSm">
                //       Date Acquired
                //     </Typography>
                //   }
                //   fullWidth
                //   // placeholder="mm/dd/yyyy"
                //   // InputLabelProps={{
                //   //   shrink: true,
                //   // }}
                // />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controller
              name="purchasePrice"
              control={control}
              defaultValue={userCard.purchasePrice ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                  label={
                    <Typography variant="placeholderSm">
                      Purchase Price
                    </Typography>
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controller
              name="gradingCost"
              control={control}
              defaultValue={userCard?.gradingCost ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                  label={
                    <Typography variant="placeholderSm">
                      Grading Cost
                    </Typography>
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controller
              name="cardStatus"
              control={control}
              defaultValue={userCard.cardStatus ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label={
                    <Typography variant="placeholderSm">Status</Typography>
                  }
                  fullWidth
                >
                  {[
                    "flip",
                    "short term",
                    "long term",
                    "personal collection",
                  ].map(value => (
                    <MenuItem key={value} value={value}>
                      {value
                        .split(" ")
                        .map(str => str.charAt(0).toUpperCase() + str.slice(1))
                        .join(" ")}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controller
              name="acquisitionSource"
              control={control}
              defaultValue={userCard.acquisitionSource ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={
                    <Typography variant="placeholderSm">
                      Acquisition Source
                    </Typography>
                  }
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controller
              name="storageLocation"
              control={control}
              defaultValue={userCard.storageLocation ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={
                    <Typography variant="placeholderSm">
                      Storage Location
                    </Typography>
                  }
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controller
              name="editionNumber"
              control={control}
              defaultValue={userCard.editionNumber ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={
                    <Typography variant="placeholderSm">Edition No.</Typography>
                  }
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controller
              name="editionSize"
              control={control}
              defaultValue={userCard.editionSize ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={
                    <Typography variant="placeholderSm">
                      Edition Size
                    </Typography>
                  }
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.section}>
        <Typography variant="addLg" sx={styles.title}>
          Unique Elements
        </Typography>
        <UserCardDetailSelection userCardId={userCard.id} />
      </Box>
      <Box sx={{ ...styles.section, ...styles.midSection }}>
        <Box sx={{ mr: 2 }}>
          <Typography variant="subtitle1">
            Card visible in public collection?
          </Typography>
        </Box>
        <Controller
          name="isPublic"
          control={control}
          defaultValue={true}
          render={({ field }) => <Switch {...field} defaultChecked={true} />}
        />
      </Box>

      <Box sx={styles.footer}>
        <Box>
          <Typography variant="subtitle1">Total Cost of Card</Typography>
          <Typography variant="h4">
            ${parseFloat(totalCost).toFixed(2)}
          </Typography>
        </Box>
        <Box sx={styles.buttonWrapper}>
          {editing ? (
            <Button onClick={onCancel} sx={{ mr: 2 }} variant="outlined">
              Cancel
            </Button>
          ) : (
            <Button
              onClick={onSkip}
              disabled={!onSkip}
              sx={{ mr: 2 }}
              variant="outlined"
            >
              Skip Card
            </Button>
          )}
          <Button
            onClick={onSubmit}
            sx={{ ml: { md: 2, xs: 0 } }}
            variant="contained"
          >
            {editing ? "Save" : "Save to My Collection"}
          </Button>
        </Box>
      </Box>
    </Box>
  </>
);

export default UserCardDetailsFormView;
