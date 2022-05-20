import { useQuery } from "@apollo/client"
import ProfileUserModule from "components/Profile/UserModule";
import { listMyRecommendedFriendsQuery } from "./queries";


const YouMayKnowListContainer = () => {
  const { error, data: { listMyRecommendedFriends: users = [] } = {} } = useQuery(listMyRecommendedFriendsQuery);

  !!error && console.error(error)

  return !users.length ? null : <ProfileUserModule 
    users={users} 
    title="You May Know" 
  />
}

export default YouMayKnowListContainer