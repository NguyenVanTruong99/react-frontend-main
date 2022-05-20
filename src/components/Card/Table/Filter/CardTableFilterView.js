import { Box, Grid, Input, Typography, Slider } from "@mui/material";
import MultiSelect from "components/Form/MultiSelect";
import styles from "./CardTableFilterStyles";

const CardTableFilterView = ({
  cardStatuses,
  grades,
  handleFilterChanged,
  handleYearInputChange,
  handleYearRangeChange,
  playerNames,
  selectedCardStatuses,
  selectedGrades,
  selectedPlayerNames,
  selectedSetNames,
  selectedSportNames,
  selectedYearInput,
  selectedYearRange,
  setNames,
  sportNames,
  yearRange,
}) => (
  <Grid container spacing={2} sx={styles.container}>
    <Grid item xs={12}>
      <Box sx={styles.control}>
        <Typography sx={styles.label} variant="body2">
          Year
        </Typography>
        <Input
          disableUnderline={true}
          onBlur={handleYearRangeChange}
          onChange={handleYearInputChange}
          sx={styles.input}
          value={selectedYearRange.join(" - ")}
        />
      </Box>
      <Slider
        max={yearRange[1]}
        min={yearRange[0]}
        onChange={e => handleFilterChanged("year", e.target.value)}
        value={selectedYearRange}
        valueLabelDisplay="auto"
        sx={styles.slider}
      />
    </Grid>
    {!!(Array.isArray(setNames) && setNames.length > 0) && (
      <Grid item xs={6}>
        <Typography sx={styles.label} variant="body2">
          Set
        </Typography>
        <MultiSelect
          currentValue={selectedSetNames}
          onChange={e => handleFilterChanged("setName", e.target.value)}
          onDelete={(e, value) =>
            handleFilterChanged(
              "setName",
              selectedSetNames.filter(n => n !== value)
            )
          }
          values={setNames}
          sx={styles.select}
        />
      </Grid>
    )}
    {!!(Array.isArray(sportNames) && sportNames.length > 0) && (
      <Grid item xs={6}>
        <Typography sx={styles.label} variant="body2">
          Sport
        </Typography>
        <MultiSelect
          currentValue={selectedSportNames}
          onChange={e => handleFilterChanged("sportName", e.target.value)}
          onDelete={(e, value) =>
            handleFilterChanged(
              "sportName",
              selectedSportNames.filter(n => n !== value)
            )
          }
          values={sportNames}
          sx={styles.select}
        />
      </Grid>
    )}
    {!!(Array.isArray(grades) && grades.length > 0) && (
      <Grid item xs={6}>
        <Typography sx={styles.label} variant="body2">
          Grade
        </Typography>
        <MultiSelect
          currentValue={selectedGrades}
          onChange={e => handleFilterChanged("grade", e.target.value)}
          onDelete={(e, value) =>
            handleFilterChanged(
              "grade",
              selectedGrades.filter(n => n !== value)
            )
          }
          values={grades}
          sx={styles.select}
        />
      </Grid>
    )}
    {!!(Array.isArray(cardStatuses) && cardStatuses.length > 0) && (
      <Grid item xs={6}>
        <Typography sx={styles.label} variant="body2">
          Holding Status
        </Typography>
        <MultiSelect
          currentValue={selectedCardStatuses}
          onChange={e => handleFilterChanged("cardStatus", e.target.value)}
          onDelete={(e, value) =>
            handleFilterChanged(
              "cardStatus",
              selectedCardStatuses.filter(n => n !== value)
            )
          }
          values={cardStatuses}
          sx={styles.select}
        />
      </Grid>
    )}
    {!!(Array.isArray(playerNames) && playerNames.length > 0) && (
      <Grid item xs={6}>
        <Typography sx={styles.label} variant="body2">
          Player Name
        </Typography>
        <MultiSelect
          currentValue={selectedPlayerNames}
          onChange={e => handleFilterChanged("playerName", e.target.value)}
          onDelete={(e, value) =>
            handleFilterChanged(
              "playerName",
              selectedPlayerNames.filter(n => n !== value)
            )
          }
          values={playerNames}
          sx={styles.select}
        />
      </Grid>
    )}
  </Grid>
);

export default CardTableFilterView;
