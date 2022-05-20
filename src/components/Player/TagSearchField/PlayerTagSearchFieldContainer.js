import { useCallback, useEffect, useState } from "react";
import { searchPlayers } from "../queries";
import PlayerTagSearchFieldView from "./PlayerTagSearchFieldView";
import { useApolloClient } from "@apollo/client";

const PlayerTagSearchFieldContainer = ({ onTagChange }) => {
  const client = useApolloClient();

  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleDelete = useCallback(
    tagIndex => setTags(tags => tags.filter((_, i) => i !== tagIndex)),
    []
  );

  const handleAddition = useCallback(
    newTag => setTags(tags => [...tags, newTag]),
    []
  );

  const handleInput = useCallback(
    query =>
      client
        .query({
          query: searchPlayers,
          variables: {
            term: query,
          },
        })
        .then(({ data: { searchPlayers: { results = [] } = {} } = {} }) =>
          setSuggestions(
            results
              .map(result =>
                result.items.map(item => ({
                  id: item.id,
                  name: `${item.title}, ${
                    item.meta_data?.position_name ?? ""
                  }`.replace(/, $/, ""),
                }))
              )
              .flat(100)
          )
        ),
    [client]
  );

  useEffect(() => {
    !!onTagChange && onTagChange(tags);
  }, [tags, onTagChange]);

  return (
    <PlayerTagSearchFieldView
      tags={tags}
      suggestions={suggestions}
      onDelete={handleDelete}
      onAddition={handleAddition}
      onInput={handleInput}
    />
  );
};

export default PlayerTagSearchFieldContainer;
