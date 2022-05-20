import { useQuery } from "@apollo/client"
import ProfileUserModule from "components/Profile/UserModule";
import { useMemo } from "react";
import { listMyRecommendedFriendsQuery } from "./queries";


const query = {
  query: listMyRecommendedFriendsQuery
}

const YouMayKnowListContainer = () => {
  const { error, data: { listMyRecommendedFriends: users = [] } = {} } = useQuery(query.query);
  const refetchQueries = useMemo(() => [], [])

  !!error && console.error(error)

  return !users.length ? null : <ProfileUserModule 
    refetchQueries={refetchQueries}
    users={users} 
    title="You May Know" 
  />
}

export default YouMayKnowListContainer