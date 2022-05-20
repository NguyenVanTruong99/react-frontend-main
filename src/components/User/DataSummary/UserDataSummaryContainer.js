import { useQuery } from "@apollo/client";
import { getUser } from "../queries";
import UserDataSummaryView from "./UserDataSummaryView";

const UserDataSummaryContainer = ({ userId, playerId }) => {
  const { error, data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      id: userId,
      playerId,
    },
  });

  !!error && console.error("error", error);

  return <UserDataSummaryView user={user} />;
};

export default UserDataSummaryContainer;
