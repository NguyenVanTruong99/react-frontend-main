import { Box, Typography } from "@mui/material";

import { SHOWCASE_TABLE_COLS } from "constants/showcases";
import ShowcaseTableRow from "./Row";
import Table from "components/Table";
import styles from "./ShowcaseTableStyles";

const ShowcaseTableView = ({
  handleSelectedShowcasesChanged,
  initialSelectedShowcases,
  isEmpty,
  loading,
  lockIfInitialSelected,
  selectable,
  showcases,
}) =>
  isEmpty ? (
    <Box>
      <Typography>You don't have any showcases.</Typography>
    </Box>
  ) : (
    <Table
      columns={[
        SHOWCASE_TABLE_COLS.IMAGE,
        SHOWCASE_TABLE_COLS.NAME,
        SHOWCASE_TABLE_COLS.CARD_COUNT,
      ]}
      initialSelectedRows={initialSelectedShowcases}
      isLoading={loading}
      lockIfInitialSelected={lockIfInitialSelected}
      onSelectedRowsChanged={handleSelectedShowcasesChanged}
      RowComponent={ShowcaseTableRow}
      rows={showcases}
      selectable={selectable}
      showCount={false}
      showPagination={false}
      sx={{
        border: 0,
        marginTop: 0,
        paddingTop: 0,
        marginLeft: 5,
        width: "90%",
      }}
    />
  );

export default ShowcaseTableView;
