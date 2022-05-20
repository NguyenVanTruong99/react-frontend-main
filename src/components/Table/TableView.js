import {
  Box,
  Checkbox,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Skeleton from "@mui/material/Skeleton";
import globalStyles from "components/Styles";
import styles from "./TableStyles";

const TableView = ({
  columns,
  count,
  handleAllToggled,
  onChangePage,
  handleRowClicked,
  handleRowToggled,
  handleTableCellClicked,
  initialSelectedRows,
  isAllSelected,
  isLoading,
  isMobile,
  lockIfInitialSelected,
  onChangeRowsPerPage,
  page,
  resultLabel,
  RowActionComponent,
  RowComponent,
  rows,
  rowsPerPage,
  selectable,
  selectedRows,
  showCount,
  showPagination,
  showRowActions,
  sortable,
  sortColumn,
  sortDirection,
  sx,
  tableCellWidth,
  TableProps,
  title,
  ToolbarComponent,
  ToolbarProps,
  userCardsSet,
  visibleColumns,
}) => (
  <Box sx={{ ...styles.container, ...sx }}>
    <Box sx={styles.toolbarContainer}>
      {(title || showCount) && (
        <Box sx={{ ...styles.toolbarText, ...(sx.toolbarText || {}) }}>
          {title && (
            <Typography
              variant="h6"
              sx={{
                ...globalStyles.bold,
                marginRight: theme => theme.spacing(1),
              }}
            >
              {title}
            </Typography>
          )}
          {showCount && (
            <Typography variant="h6" sx={globalStyles.muted}>
              {(count || 0).toLocaleString()} {resultLabel || "Results"}
            </Typography>
          )}
        </Box>
      )}
      {ToolbarComponent && <ToolbarComponent {...ToolbarProps} />}
    </Box>
    <TableContainer sx={{ height: "100%" }}>
      <MUITable {...TableProps}>
        {columns.length > 0 && (
          <TableHead>
            <TableRow>
              {selectable && (
                <TableCell sx={styles.checkboxCell}>
                  <Checkbox
                    indeterminate={false}
                    checked={isAllSelected}
                    onChange={handleAllToggled}
                    inputProps={{}}
                  />
                </TableCell>
              )}
              {columns
                .filter(column => visibleColumns.includes(column))
                .map((column, idx) => (
                  <TableCell
                    key={idx}
                    size="small"
                    sx={{
                      ...styles.headCell,
                      ...(column?.label === sortColumn?.label
                        ? styles.headCellActive
                        : {}),
                      ...(column?.label === "Card" ? styles.cardTitle : {}),
                      ...(column?.label === "Card" && selectable
                        ? {}
                        : { left: 0 }),
                    }}
                    onClick={() => {
                      if (column?.sortable && sortable) {
                        handleTableCellClicked(
                          column,
                          sortDirection === "desc" ? "asc" : "desc"
                        );
                      }
                    }}
                  >
                    <Box component="span" sx={styles.cellContent}>
                      {column?.label}
                      {sortable &&
                        column?.sortable &&
                        (column?.label === sortColumn?.label &&
                        sortDirection === "asc" ? (
                          <ArrowDropUpIcon sx={styles.sortIcon} />
                        ) : (
                          <ArrowDropDownIcon sx={styles.sortIcon} />
                        ))}
                    </Box>
                  </TableCell>
                ))}
              {/* // empty cell for actions column */}
              <TableCell />
            </TableRow>
          </TableHead>
        )}
        {rows.length > 0 && !isLoading && (
          <TableBody>
            {rows.map((row, idx) =>
              !!RowComponent ? (
                <RowComponent
                  handleRowClicked={handleRowClicked}
                  handleRowToggled={handleRowToggled}
                  initialSelectedRows={initialSelectedRows}
                  isSelected={!!selectedRows.find(sel => sel === row)}
                  item={row}
                  key={idx}
                  lockIfInitialSelected={lockIfInitialSelected}
                  RowActionComponent={RowActionComponent}
                  selectable={selectable}
                  showActions={showRowActions}
                  visibleColumns={visibleColumns}
                  tableCellWidth={tableCellWidth}
                  userCardsSet={userCardsSet}
                />
              ) : null
            )}
          </TableBody>
        )}
        {isLoading && (
          <TableBody>
            {Array(rowsPerPage)
              .fill(0)
              .map((_, idx) => (
                <TableRow key={idx}>
                  {Array(visibleColumns.length)
                    .fill(0)
                    .map((_, idx) => (
                      <TableCell key={idx}>
                        <Skeleton variant="text" />
                      </TableCell>
                    ))}
                </TableRow>
              ))}
          </TableBody>
        )}
      </MUITable>
    </TableContainer>
    {showPagination && (
      <TablePagination
        count={count}
        labelRowsPerPage={isMobile ? "Rows" : "Rows per page:"}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={styles.paginationContainer}
      />
    )}
  </Box>
);

export default TableView;
