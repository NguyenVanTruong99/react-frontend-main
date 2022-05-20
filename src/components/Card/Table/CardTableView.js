import CardTableRow from "./Row";
import Table from "components/Table";

const CardTableView = ({
  cards,
  handleChangePage,
  handleChangeRowsPerPage,
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
  userCardsSet,
  visibleColumns,
}) => (
  <Table
    columns={visibleColumns}
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
    RowActionComponent={props => <RowActionComponent {...props} />}
    RowComponent={CardTableRow}
    rows={cards}
    rowsPerPage={limit}
    showCount={showCount}
    showPagination={showPagination}
    showRowActions={showRowActions}
    selectable={showCheckBoxes}
    sortable={sortable}
    sortColumn={sort}
    sortDirection={sortDirection}
    title={title}
    style={{ border: "10px solid red" }}
    ToolbarComponent={ToolbarComponent}
    ToolbarProps={ToolbarProps}
    userCardsSet={userCardsSet}
    {...TableProps}
  />
);

export default CardTableView;
