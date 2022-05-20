import Table from "components/Table";
import UserSearchTableRow from "./Row";

const UserSearchTableView = ({
  users,
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
    resultLabel="Results"
    RowActionComponent={props => (
      <RowActionComponent {...props} handleRefetch={handleRefetch} handleModalOpen={handleModalOpen}/>
    )}
    RowComponent={UserSearchTableRow}
    rows={users}
    rowsPerPage={limit}
    selectable={showCheckBoxes}
    showCount={showCount}
    showPagination={showPagination}
    showRowActions={showRowActions}
    sortable={sortable}
    sortColumn={sort}
    sortDirection={sortDirection}
    TableProps={TableProps}
    title={title}
    ToolbarComponent={ToolbarComponent}
    ToolbarProps={ToolbarProps}
    sx={{ height: "100%" }}
  />
);

export default UserSearchTableView;
