import { useCallback, useEffect, useState } from "react";

import { USER_TABLE_COLS } from "constants/users";
import UserSearchTableRowActions from "components/User/SearchTable/Row/Actions";
import UserSearchTableToolbar from "components/User/SearchTable/Toolbar";
import UserSearchTableView from "./UserSearchTableView";
import ModalPrompt from "components/ModalPrompt";
import getRangeFromAggs from "utils/getRangeFromAggs";
import getValuesFromAggs from "utils/getValuesFromAggs";
import parseInterest from "utils/parseInterest";
import { searchUsers } from "components/User/queries";
import { useQuery } from "@apollo/client";

const UserSearchTableContainer = ({
  columns = [
    USER_TABLE_COLS.MEMBER,
    USER_TABLE_COLS.INTEREST,
    USER_TABLE_COLS.MUTUAL_FRIENDS,
  ],
  initialLimit = 10,
  onSortChanged = null,
  onRowClicked = null,
  RowActionComponent = null,
  showCheckBoxes = false,
  showCount = true,
  showPagination = true,
  showRowActions = true,
  showToolbar = true,
  sortable = true,
  TableProps = {},
  term = "*",
  title = "Users with matched interest",
  users = [],
  otherUsers,
  defaultSearchField = USER_TABLE_COLS.MEMBER,
}) => {
  const [filters, setFilters] = useState({});
  const [limit, setLimit] = useState(initialLimit);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState(defaultSearchField);
  const [sortDirection, setSortDirection] = useState("desc");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    setFilters({});
  }, [term]);

  const hasUsers = Array.isArray(users) && users.length > 0;
  const searchData = useQuery(searchUsers, {
    skip: !term || hasUsers,
    variables: {
      term,
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
  if (!term || hasUsers) {
    results = {
      items: users.map(user => ({
        ...user,
        ...{ interest: parseInterest(user.highlight) || user.interest },
      })),
      count: users.count,
    };
    loading = false;
    aggs = [];
  } else {
    results = searchData?.data?.searchUsers?.results[0];
    loading = searchData?.loading;
    refetch = searchData?.refetch;
    aggs = results?.aggs || [];
  }

  let mappedUsers;
  if (!loading)
    mappedUsers = results?.items?.map(user => ({
      ...user,
      ...{ interest: parseInterest(user.highlight) },
    }));

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

    if (onSortChanged) {
      onSortChanged(field, direction);
    }
  };

  const handleApplyFilters = filters => {
    setOffset(0);
    setFilters(filters);
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

  return (
    <>
      <UserSearchTableView
        users={mappedUsers}
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
                <UserSearchTableRowActions
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
        TableProps={TableProps}
        title={title}
        ToolbarComponent={showToolbar ? UserSearchTableToolbar : null}
        ToolbarProps={{}}
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

export default UserSearchTableContainer;
