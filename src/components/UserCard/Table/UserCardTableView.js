import Table from "components/Table";
import UserCardTableRow from "./Row";

const UserCardTableView = ({
  cards,
  columns,
  handleChangePage,
  handleChangeRowsPerPage,
  handleModalOpen,
  handleRefetch,
  handleRowClicked,
  handleSortingChanged,
  isLoading,
  limit,
  offset,
  RowActionComponent,
  showCheckBoxes,
  showCount,
  showPagination,
  showRowActions,
  sort,
  sortable,
  sortDirection,
  tableCellWidth,
  TableProps,
  title,
  ToolbarComponent,
  ToolbarProps,
  totalCount,
}) => (
  <Table
    columns={columns}
    count={totalCount}
    handleChangePage={handleChangePage}
    handleChangeRowsPerPage={handleChangeRowsPerPage}
    handleRowClicked={handleRowClicked}
    handleSortingChanged={(field, direction) =>
      handleSortingChanged(field, direction)
    }
    isLoading={isLoading}
    page={offset / limit}
    resultLabel="Cards"
    RowActionComponent={props => (
      <RowActionComponent
        {...props}
        handleRefetch={handleRefetch}
        handleModalOpen={handleModalOpen}
      />
    )}
    RowComponent={UserCardTableRow}
    rows={cards}
    rowsPerPage={limit}
    selectable={showCheckBoxes}
    showCount={showCount}
    showPagination={showPagination}
    showRowActions={showRowActions}
    sortable={sortable}
    sortColumn={sort}
    sortDirection={sortDirection}
    tableCellWidth={tableCellWidth}
    TableProps={TableProps}
    title={title}
    ToolbarComponent={ToolbarComponent}
    ToolbarProps={ToolbarProps}
    sx={{ height: "100%" }}
  />
);

export default UserCardTableView;
