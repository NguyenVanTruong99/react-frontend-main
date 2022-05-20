import { useEffect, useMemo, useState } from "react";

import { CARD_TABLE_COLS } from "constants/cards";
import CardTableRowActions from "./Row/Actions";
import CardTableToolbar from "./Toolbar";
import CardTableView from "./CardTableView";
import getRangeFromAggs from "utils/getRangeFromAggs";
import getValuesFromAggs from "utils/getValuesFromAggs";
import { searchCards } from "../queries";
import { listMyUserCards } from "components/UserCard/queries";
import { useQuery } from "@apollo/client";

const CardTableContainer = ({
  columns = [
    CARD_TABLE_COLS.DETAILS,
    CARD_TABLE_COLS.PLAYER_NAME,
    CARD_TABLE_COLS.YEAR,
    CARD_TABLE_COLS.MANUFACTURER,
    CARD_TABLE_COLS.SET,
    CARD_TABLE_COLS.PARALLEL,
    CARD_TABLE_COLS.CARD_NUM,
    CARD_TABLE_COLS.TOTAL_GRADED,
    CARD_TABLE_COLS.ACTIONS,
  ],
  initialLimit = 10,
  initialFilters = {},
  onResults,
  onRowClicked = null,
  RowActionComponent = null,
  sortable = true,
  showCount = true,
  showCheckBoxes = false,
  showPagination = true,
  showRowActions = true,
  showToolbar = true,
  TableProps = {},
  term = "*",
  title = "",
}) => {
  const [filters, setFilters] = useState(initialFilters);
  const [limit, setLimit] = useState(initialLimit);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState(CARD_TABLE_COLS.TOTAL_GRADED);
  const [sortDirection, setSortDirection] = useState("desc");
  const [isLoading, setIsLoading] = useState(false);

  const searchData = useQuery(searchCards, {
    skip: !term,
    variables: {
      term,
      sortAttributes: {
        sortField: sort?.sortableField,
        direction: sortDirection,
      },
      offsetAttributes: {
        limit: limit,
        offset: offset,
      },
      filterAttributes: filters,
    },
  });

  const listMyUserCardsQuery = useQuery(listMyUserCards);
  const userCardsSet = new Set([]);
  if (!listMyUserCardsQuery.loading) {
    listMyUserCardsQuery.data?.listMyUserCards?.forEach(card =>
      userCardsSet.add(card.cardId)
    );
  }

  const results = searchData?.data?.searchCards?.results[0];
  const loading = useMemo(() => searchData.loading, [searchData]);
  const aggs = results?.aggs || [];

  useEffect(() => {
    if (onResults) {
      if (!!results?.count) onResults(results?.count);
    }
  }, [onResults, results]);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const handleChangeRowsPerPage = event => {
    setLimit(Number(event.target.value) || 10);
    setOffset(0);
  };

  const handleChangePage = (event, page) => {
    setOffset(page * limit);
  };

  const handleSortingChanged = (field, direction) => {
    setSort(field);
    setSortDirection(direction);
  };

  const handleApplyFilters = filters => {
    setOffset(0);
    setFilters(filters);
  };

  return (
    <CardTableView
      cards={results?.items || []}
      filters={filters}
      handleApplyFilters={handleApplyFilters}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleRowClicked={onRowClicked}
      handleSortingChanged={handleSortingChanged}
      isLoading={isLoading}
      limit={limit}
      offset={offset}
      RowActionComponent={
        RowActionComponent
          ? RowActionComponent
          : props => <CardTableRowActions {...props} />
      }
      showCheckBoxes={showCheckBoxes}
      showCount={showCount}
      showPagination={showPagination}
      showRowActions={showRowActions}
      sort={sort}
      sortable={sortable}
      sortDirection={sortDirection}
      title={title}
      TableProps={TableProps}
      ToolbarComponent={showToolbar ? CardTableToolbar : null}
      ToolbarProps={
        showToolbar
          ? {
              handleApplyFilters: filters => handleApplyFilters(filters),
              initialFilters: filters,
              FilterModalProps: {
                playerNames: getValuesFromAggs(aggs || [], "players.full_name"),
                setNames: getValuesFromAggs(aggs, "card_set.name"),
                sportNames: getValuesFromAggs(aggs, "card_set.sport.name"),
                yearRange: getRangeFromAggs(aggs, "card_set.year"),
              },
            }
          : {}
      }
      totalCount={results?.count || 0}
      userCardsSet={userCardsSet}
      visibleColumns={columns}
    />
  );
};

export default CardTableContainer;
