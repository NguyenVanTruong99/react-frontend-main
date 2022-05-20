import { Box, Chip, MenuItem, OutlinedInput, Select } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import styles from "./MultiSelectStyles";

const MultiSelectView = ({ currentValue, onChange, onDelete, sx, values }) => (
  <Select
    sx={{ ...styles.input, ...sx }}
    labelId="demo-multiple-chip-label"
    id="demo-multiple-chip"
    multiple
    value={currentValue}
    onChange={onChange}
    shrink={true}
    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
    renderValue={selected => (
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {selected.map(value => (
          <Chip
            key={value}
            label={value}
            deleteIcon={
              <CancelOutlinedIcon
                sx={styles.cancelIcon}
                onMouseDown={event => event.stopPropagation()}
              />
            }
            sx={styles.chip}
            onDelete={e => onDelete(e, value)}
          />
        ))}
      </Box>
    )}
    MenuProps={{
      PaperProps: {
        style: {
          // @todo dont hard code
          maxHeight: 48 * 4.5 + 8,
          width: 250,
        },
      },
    }}
  >
    {values.map(name => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
);

export default MultiSelectView;
