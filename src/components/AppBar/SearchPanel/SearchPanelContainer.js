import { useState, useEffect } from "react";
import SearchPanelView from "./SearchPanelView";
import { searchAll } from "./queries";
import { useQuery } from "@apollo/client";
import { SEARCH_RESULT_TYPES } from "constants/search";
import { useNavigate } from "react-router-dom";
import parseInterest from "utils/parseInterest";

const getFilteredResults = (results, searchFilter) =>
  searchFilter === SEARCH_RESULT_TYPES.ALL
    ? results
    : searchFilter === "Cards"
    ? results.filter(r => r.type === "Cards" || r.type === "OtherUserCards")
    : searchFilter === "Users"
    ? results.filter(r => r.type === "Users" || r.type === "InterestUsers")
    : results.filter(r => r.type === searchFilter);

const SearchPanelContainer = ({
  currentUser,
  isOpen,
  term,
  handleSearchPanelClose,
}) => {
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState(SEARCH_RESULT_TYPES.ALL);
  const [interest, setInterest] = useState("");

  const { error, loading, data } = useQuery(searchAll, {
    skip: !term || !isOpen,
    variables: {
      term,
      offsetAttributes: {
        limit: 3,
      },
    },
  });

  const handleSearchFilterChanged = filter => {
    setSearchFilter(filter);
  };

  const handleViewAllClick = type => {
    handleSearchPanelClose();
    navigate(`/search?query=${term}&type=${type}`);
  };

  const results = data?.searchAll?.results || [];
  const filteredResults = getFilteredResults(results, searchFilter).filter(
    r => r.count > 0
  );
  const isEmpty = filteredResults.length === 0;

  useEffect(() => {
    if (data) {
      data.searchAll.results.forEach(result => {
        if (result.type === "InterestUsers" && result.count > 0) {
          for (let i = 0; i < result.items.length; i++)
            if (
              result.items[i].highlight &&
              result.items[i].highlight.length > 0
            ) {
              setInterest(parseInterest(result.items[i].highlight));
              break;
            }
        }
      });
    }
  }, [data]);

  !!error && console.error(error);

  return !isOpen ? null : (
    <SearchPanelView
      currentUser={currentUser}
      isEmpty={isEmpty}
      isLoading={isOpen && loading}
      handleSearchPanelClose={handleSearchPanelClose}
      handleSearchFilterChanged={handleSearchFilterChanged}
      handleViewAllClick={handleViewAllClick}
      showDarkBackground={result => result.type === SEARCH_RESULT_TYPES.CARDS}
      results={filteredResults.map(result => {
        let newResult = { ...result };

        if (result.type === SEARCH_RESULT_TYPES.PLAYERS) {
          newResult.title = "Player Profiles";
        }
        if (result.type === SEARCH_RESULT_TYPES.USERS) {
          newResult.title = "NoXX Members";
        }
        if (result.type === SEARCH_RESULT_TYPES.INTEREST_USERS) {
          newResult.title = `NoXX Members interested in "${interest}"`;
        }
        if (result.type === SEARCH_RESULT_TYPES.CARDS) {
          newResult.title = "NoXX Catalog Cards";
        }
        if (result.type === SEARCH_RESULT_TYPES.USER_CARDS) {
          newResult.title = "Cards in My Collection";
        }
        if (result.type === SEARCH_RESULT_TYPES.OTHER_USER_CARDS) {
          newResult.title = "Cards in other Members' Collections";
        }

        return newResult;
      })}
      selectedSearchFilter={searchFilter}
    />
  );
};

export default SearchPanelContainer;
