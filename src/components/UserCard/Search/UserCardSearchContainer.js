import { searchUserCards } from "../queries";
import UserCardSearchView from "./UserCardSearchView";
import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

const UserCardSearchContainer = ({ onItems, placeholder, searchRef }) => {
  const [term, setTerm] = useState("");
  const [resultCount, setResultCount] = useState(0);
  // const [moreResults, setMoreResults] = useState("[]")

  const handleSearchChange = useCallback(term => setTerm(term), []);

  const {
    fetchMore,
    error,
    data: { searchUserCards: { results = [] } = {} } = {},
  } = useQuery(searchUserCards, {
    variables: {
      term: !!term ? term : "*",
      offsetAttributes: {
        limit: 20,
        offset: resultCount,
      },
    },
  });

  const itemsString = JSON.stringify(results?.[0]?.items ?? []);

  searchRef.current = {
    fetchMore: () =>
      !!resultCount &&
      fetchMore({
        variables: {
          term: !!term ? term : "*",
          offsetAttributes: {
            limit: 20,
            offset: resultCount,
          },
        },
      }),
  };

  useEffect(() => {
    setResultCount(JSON.parse(itemsString).length);
  }, [itemsString]);

  useEffect(() => {
    setResultCount(0);
  }, [term]);

  useEffect(() => {
    !!onItems && onItems(JSON.parse(itemsString));
  }, [onItems, itemsString]);

  !!error && console.error(error);

  return (
    <UserCardSearchView
      term={term}
      onSearchChange={handleSearchChange}
      placeholder={placeholder}
    />
  );
};

export default UserCardSearchContainer;
