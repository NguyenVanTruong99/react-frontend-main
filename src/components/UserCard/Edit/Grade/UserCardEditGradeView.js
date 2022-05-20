import { Grid, MenuItem, TextField, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { Controller } from "react-hook-form";
import Switch from "components/Switch";
import globalStyles from "components/Styles";
import styles from "./UserCardEditGradeStyles";

const UserCardEditGradeView = ({
  userCard,
  control,
  allGrades,
  graded,
  toggleGraded,
}) => (
  <>
    <Box
      sx={{
        ...globalStyles.row,
        ...{ alignItems: "center", justifyContent: "space-between" },
      }}
    >
      <Typography variant="h4">Graded?</Typography>
      <Switch checked={graded} onChange={toggleGraded} />
    </Box>
    {graded && !userCard.isCertified && (
      <Box sx={styles.section} component="form">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Controller
              name="gradeId"
              control={control}
              defaultValue={userCard.gradeId ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label={<Typography variant="placeholder">Grade</Typography>}
                  fullWidth
                >
                  {allGrades
                    // .filter(grade => grade.gradeVendor.name !== 'Raw')
                    .sort((a, b) => (a > b ? -1 : 1))
                    .map(grade => (
                      <MenuItem key={grade.id} value={grade.id}>
                        {grade.gradeVendor.name} {grade.gradeDisplay}
                      </MenuItem>
                    ))}
                </TextField>
              )}
            />
          </Grid>
        </Grid>
      </Box>
    )}
    {graded && false && (
      <Box sx={styles.section} component="form">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Controller
              name="gradeVendor"
              control={control}
              defaultValue={userCard?.cardGrade?.gradeVendor?.name ?? ""}
              render={({ field }) => (
                <TextField {...field} disabled label="Company" fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Controller
              name="certNumber"
              control={control}
              defaultValue={userCard?.certNumber ?? ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  disabled
                  label="Serial Number"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Controller
              name="grade"
              control={control}
              defaultValue={userCard?.cardGrade?.grade?.grade ?? ""}
              render={({ field }) => (
                <TextField {...field} disabled label="Grade" fullWidth />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    )}
  </>
);

export default UserCardEditGradeView;
