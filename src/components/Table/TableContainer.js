import { useEffect, useState } from "react";
import TableView from "./TableView";
import { useTheme, useMediaQuery } from "@mui/material";

const TableContainer = ({
  columns,
  count,
  handleChangePage,
  handleChangeRowsPerPage,
  handleRowClicked = null,
  handleSortingChanged,
  initialSelectedRows = [],
  isLoading,
  lockIfInitialSelected,
  onSelectedRowsChanged,
  page,
  resultLabel,
  RowActionComponent = null,
  RowComponent = null,
  rows = [],
  rowsPerPage = 15,
  selectable = false,
  showCount = true,
  showPagination = true,
  showRowActions = true,
  sortable,
  sortColumn,
  sortDirection,
  sx = {},
  tableCellWidth,
  TableProps = {},
  title,
  ToolbarComponent,
  ToolbarProps = {},
  userCardsSet,
}) => {
  const theme = useTheme();
  const [selectedRows, setSelectedRows] = useState(initialSelectedRows);
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    if (!!onSelectedRowsChanged) onSelectedRowsChanged(selectedRows);
  }, [selectedRows, onSelectedRowsChanged]);

  const handleTableCellClicked = (column, sortDirection) => {
    if (handleSortingChanged) {
      handleSortingChanged(column, sortDirection);
    }
  };

  const handleRowToggled = row => {
    if (isAllSelected) setIsAllSelected(false);

    if (!!selectedRows.find(selected => selected === row)) {
      setSelectedRows([...selectedRows].filter(selected => selected !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleAllToggled = () => {
    if (isAllSelected) {
      handleResetSelectedRows();
    } else {
      setSelectedRows([...selectedRows, ...rows]);
      setIsAllSelected(true);
    }
  };

  const handleResetSelectedRows = () => {
    setSelectedRows([]);
    setIsAllSelected(false);
  };

  const onChangePage = (e, page) => {
    if (!!handleChangePage) handleChangePage(e, page);

    handleResetSelectedRows();
  };

  const onChangeRowsPerPage = e => {
    if (!!handleChangeRowsPerPage) handleChangeRowsPerPage(e);

    handleResetSelectedRows();
  };

  return (
    <TableView
      columns={columns}
      count={count}
      handleAllToggled={handleAllToggled}
      handleRowClicked={handleRowClicked}
      handleRowToggled={handleRowToggled}
      handleTableCellClicked={handleTableCellClicked}
      initialSelectedRows={initialSelectedRows}
      isAllSelected={isAllSelected}
      isLoading={isLoading}
      isMobile={useMediaQuery(theme.breakpoints.down("sm"))}
      lockIfInitialSelected={lockIfInitialSelected}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      page={page}
      resultLabel={resultLabel}
      RowActionComponent={RowActionComponent}
      RowComponent={RowComponent}
      rows={rows || []}
      rowsPerPage={rowsPerPage}
      selectable={selectable}
      selectedRows={selectedRows}
      showCount={showCount}
      showPagination={showPagination}
      showRowActions={showRowActions}
      sortable={sortable}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
      sx={sx}
      tableCellWidth={tableCellWidth}
      TableProps={TableProps}
      title={title}
      ToolbarComponent={ToolbarComponent}
      ToolbarProps={{ ...ToolbarProps, selectedRows, handleResetSelectedRows }}
      userCardsSet={userCardsSet}
      visibleColumns={columns}
    />
  );
};

export default TableContainer;
