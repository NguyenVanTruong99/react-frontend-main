import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";

import { SHOWCASE_TABLE_COLS } from "constants/showcases";
import styles from "./ShowcaseTableRowStyles";

const ShowcaseTableRowView = ({
  coverImage,
  handleRowClicked,
  handleRowToggled,
  isSelectDisabled,
  isSelected,
  item,
  selectable,
  visibleColumns,
}) => (
  <TableRow
    onClick={e => {
      if (!!handleRowClicked) handleRowClicked(e, item);
    }}
  >
    {selectable && (
      <TableCell sx={styles.checkboxCell}>
        <Checkbox
          color="primary"
          checked={isSelected}
          onChange={() => handleRowToggled(item)}
          disabled={isSelectDisabled}
          inputProps={{}}
        />
      </TableCell>
    )}
    {visibleColumns.map((visibleColumn, idx) => {
      switch (visibleColumn) {
        case SHOWCASE_TABLE_COLS.NAME:
          return (
            <TableCell key={idx} align="left">
              <Typography>{item.name}</Typography>
            </TableCell>
          );
        case SHOWCASE_TABLE_COLS.IMAGE:
          return (
            <TableCell key={idx}>
              {!!coverImage && (
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={coverImage} alt="cover" style={{ maxHeight: 80 }} />
                </Box>
              )}
            </TableCell>
          );
        case SHOWCASE_TABLE_COLS.CARD_COUNT:
          return (
            <TableCell key={idx} align="left">
              <Typography>{item.cardCount}</Typography>
            </TableCell>
          );
        default:
          return null;
      }
    })}
  </TableRow>
);

export default ShowcaseTableRowView;
