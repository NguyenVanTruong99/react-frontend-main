import { Box } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

import DailyPerformersView from "./DailyPerformersView";
import { dailyPerformersPlayerFragment } from "./Player/DailyPerformersPlayerView";

const query = gql`
  query ListPlayersById($ids: [ID!]!) {
    listPlayersById(ids: $ids) {
      id
      ...DailyPerformersPlayerFragment
    }
  }
  ${dailyPerformersPlayerFragment}
`;

const DailyPerformersContainer = ({
  user,
  playerIds,
  metadata,
  displayName,
}) => {

  const { error, data: {listPlayersById: players} = {}, loading } = useQuery(query, {
    variables: {
      ids: playerIds,
    },
  });
  !!error && console.error(error);

  
  return !!loading ? (
    <Box>Loading...</Box>
  ) : !players?.length ? (
    null
  ) : (
    <DailyPerformersView
      players={players}
      displayName={displayName}
      metadata={metadata}
    />
  );
};

export default DailyPerformersContainer;
