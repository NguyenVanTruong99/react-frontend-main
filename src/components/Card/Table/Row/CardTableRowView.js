import {
  Checkbox,
  TableCell,
  TableRow,
  Typography,
  Divider,
} from "@mui/material";

import { CARD_TABLE_COLS } from "constants/cards";
import CardBasicDetail from "components/Card/BasicDetail";
import CardTableRowActions from "components/Card/Table/Row/Actions";

const CardTableRowView = ({
  handleCardClick,
  handleRowClicked,
  handleRowToggled,
  isSelected,
  item,
  selectable,
  userHasCard,
  visibleColumns,
  style,
}) => (
  <TableRow
    onClick={e => {
      if (!!handleRowClicked) handleRowClicked(e, item.card.id);
    }}
  >
    {selectable && (
      <TableCell sx={style.checkboxCell}>
        <Checkbox
          color="primary"
          checked={isSelected}
          onChange={() => handleRowToggled(item)}
          inputProps={{}}
        />
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.DETAILS) && (
      <TableCell
        align="left"
        sx={style.cardDetail}
        onClick={e => handleCardClick(e, item.card.id)}
      >
        <CardBasicDetail
          imageOnly={true}
          cardFrontImageUrl={item.card.frontUrl}
          cardName={item.card.name}
          cardNumber={item.card.cardNumber}
          cardSetName={item.card.cardSet?.name}
          cardSetVariety={item.card.cardSet?.variety}
          cardSetYear={item.card.cardSet?.year}
          userHasCard={userHasCard}
        />
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.PLAYER_NAME) && (
      <TableCell sx={style.cardTableCell}>
        <Typography>
          {item.card.players[0]?.fullName || item.card.name || "-"}
        </Typography>
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.YEAR) && (
      <TableCell sx={style.cardTableCell}>
        <Typography>{item.card.cardSet.year || "-"}</Typography>
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.MANUFACTURER) && (
      <TableCell sx={style.cardTableCell}>
        <Typography>{item.card.manufacturer.name || "-"}</Typography>
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.SET) && (
      <TableCell sx={style.cardTableCell}>
        <Typography>{item.card.cardSet.name || "-"}</Typography>
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.PARALLEL) && (
      <TableCell sx={style.cardTableCell}>
        <Typography>{item.card.cardSet.variety || "-"}</Typography>
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.CARD_NUM) && (
      <TableCell sx={style.cardTableCell}>
        <Typography>{item.card.cardNumber || "-"}</Typography>
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.TOTAL_GRADED) && (
      <TableCell sx={style.cardTableCell}>
        <Typography>
          {item.card.totalGraded ? item.card.totalGraded.toLocaleString() : "-"}
        </Typography>
      </TableCell>
    )}
    {visibleColumns.includes(CARD_TABLE_COLS.ACTIONS) && (
      <TableCell sx={style.cardTableCell}>
        <CardTableRowActions item={item} />
      </TableCell>
    )}
  </TableRow>
);

export default CardTableRowView;
