import { searchUserCards, searchUserCardsOther } from "../queries";
import { useCallback, useEffect, useState } from "react";

import ModalPrompt from "components/ModalPrompt";
import { USER_CARD_TABLE_COLS } from "constants/cards";
import UserCardTableRowActions from "components/UserCard/Table/Row/Actions";
import UserCardTableToolbar from "components/UserCard/Table/Toolbar";
import UserCardTableView from "./UserCardTableView";
import getRangeFromAggs from "utils/getRangeFromAggs";
import getValuesFromAggs from "utils/getValuesFromAggs";
import { useQuery } from "@apollo/client";

const UserCardTableContainer = ({
  columns = [
    USER_CARD_TABLE_COLS.DETAILS,
    USER_CARD_TABLE_COLS.GRADE,
    USER_CARD_TABLE_COLS.PAID,
    USER_CARD_TABLE_COLS.POP,
    USER_CARD_TABLE_COLS.SPORT,
    USER_CARD_TABLE_COLS.YEAR,
    USER_CARD_TABLE_COLS.PUBLIC,
  ],
  initialLimit = 10,
  onResults,
  onSortChanged = null,
  onRowClicked = null,
  RowActionComponent = null,
  showCheckBoxes = false,
  showCount = true,
  showPagination = true,
  showRowActions = true,
  showToolbar = true,
  sortable = true,
  tableCellWidth,
  TableProps = {},
  term = "*",
  title = "Cards in your collection",
  userCards = [],
  otherUsers,
  defaultSearchField = USER_CARD_TABLE_COLS.POP,
}) => {
  const [filters, setFilters] = useState({});
  const [limit, setLimit] = useState(initialLimit);
  const [offset, setOffset] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [sort, setSort] = useState(defaultSearchField);
  const [sortDirection, setSortDirection] = useState("desc");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    setFilters({});
  }, [term]);

  const hasCards = Array.isArray(userCards) && userCards.length > 0;
  const query = otherUsers ? searchUserCardsOther : searchUserCards;

  const searchData = useQuery(query, {
    skip: !term || hasCards,
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

  let results, loading, aggs, refetch;

  // not a huge fan -- but the table can operate with a given list of user cards
  // or by using search. long-term, we should only use search but scope it
  // to specific contexts (e.g staged vs unstaged)
  if (!term || hasCards) {
    results = {
      items: userCards.map(userCard => ({ userCard })),
      count: userCards.count,
    };
    loading = false;
    aggs = [];
  } else {
    results = otherUsers
      ? searchData?.data?.searchUserCardsOther?.results[0]
      : searchData?.data?.searchUserCards?.results[0];
    loading = searchData?.loading;
    refetch = searchData?.refetch;
    aggs = results?.aggs || [];
  }

  useEffect(() => {
    if (onResults) {
      onResults(results?.count || Number(0));
    }
  }, [onResults, results]);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const handleChangeRowsPerPage = event => {
    const newLimit = Number(event.target.value) || 10;
    setLimit(newLimit);
    setOffset(0);
    setMaxPage(0);
    refetch({
      term,
      sortAttributes: {
        sortField: sort?.sortableField,
        direction: sortDirection,
      },
      offsetAttributes: {
        limit: newLimit,
        offset: 0,
      },
      filterAttributes: filters,
    });
  };

  const handleChangePage = (event, page) => {
    setOffset(page * limit);
    if (page > maxPage) {
      setTimeout(
        () =>
          searchData.fetchMore({
            variables: {
              offset: page * limit,
              limit,
            },
          }),
        1
      );
      setMaxPage(page);
    }
  };

  const handleSortingChanged = (field, direction) => {
    setSort(field);
    setSortDirection(direction);
    setOffset(0);

    if (onSortChanged) {
      onSortChanged(field, direction);
    }
    refetch({
      term,
      sortAttributes: {
        sortField: field?.sortableField,
        direction: direction,
      },
      offsetAttributes: {
        limit: limit,
        offset: 0,
      },
      filterAttributes: filters,
    });
  };

  const handleApplyFilters = filters => {
    setOffset(0);
    setMaxPage(0);
    setFilters(filters);
    refetch({
      term,
      sortAttributes: {
        sortField: sort?.sortableField,
        direction: sortDirection,
      },
      offsetAttributes: {
        limit: limit,
        offset: 0,
      },
      filterAttributes: filters,
    });
  };

  const handleRefetch = () => {
    if (!!refetch) {
      setIsLoading(true);

      // timeout -- if you dont wait a little bit after removing
      // from ES, the track_total_hits counter is not updated
      // in time. interesting quirk.
      setTimeout(() => {
        refetch().then(() => {
          setIsLoading(false);
        });
      }, 1000);
    }
  };
  const cards = results?.items.slice(offset, offset + limit);

  return (
    <>
      <UserCardTableView
        cards={cards}
        columns={columns}
        filters={filters}
        handleApplyFilters={handleApplyFilters}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleModalOpen={handleModalOpen}
        handleRefetch={handleRefetch}
        handleRowClicked={onRowClicked}
        handleSortingChanged={handleSortingChanged}
        isLoading={isLoading}
        limit={limit}
        offset={offset}
        RowActionComponent={
          RowActionComponent
            ? RowActionComponent
            : props => (
                <UserCardTableRowActions
                  {...props}
                  handleRefetch={handleRefetch}
                />
              )
        }
        showCheckBoxes={showCheckBoxes}
        showCount={showCount}
        showPagination={showPagination}
        showRowActions={showRowActions}
        sort={sort}
        sortable={sortable}
        sortDirection={sortDirection}
        tableCellWidth={tableCellWidth}
        TableProps={TableProps}
        title={title}
        ToolbarComponent={showToolbar ? UserCardTableToolbar : null}
        ToolbarProps={
          showToolbar
            ? {
                handleApplyFilters: filters => handleApplyFilters(filters),
                handleRefetch: handleRefetch,
                initialFilters: filters,
                FilterModalProps: {
                  cardStatuses: getValuesFromAggs(aggs, "card_status"),
                  grades: getValuesFromAggs(aggs, "display_grade.display"),
                  playerNames: getValuesFromAggs(
                    aggs,
                    "card.players.full_name"
                  ),
                  setNames: getValuesFromAggs(aggs, "card.card_set.name"),
                  sportNames: getValuesFromAggs(
                    aggs,
                    "card.card_set.sport.name"
                  ),
                  yearRange: getRangeFromAggs(aggs, "card.card_set.year"),
                },
              }
            : {}
        }
        totalCount={results?.count || 0}
      />
      <ModalPrompt
        open={!!modalOpen}
        promptMessage="URL copied to your clipboard!"
        closeMessage="OK"
        actionMessage="Yes"
        handleClose={handleModalClose}
        handleAction={null}
      />
    </>
  );
};

export default UserCardTableContainer;
