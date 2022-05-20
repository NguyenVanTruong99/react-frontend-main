import ProfileUserModuleItemView from "./ProfileUserModuleItemView"
import { useCallback } from "react"
import { DateTime } from "luxon"


const ProfileUserModuleItemContainer = ({user, refetchQueries}) => {
  const handleMailClick = useCallback(() => 
    console.log("handleMailClick")
  ,[])

  return <ProfileUserModuleItemView 
    refetchQueries={refetchQueries}
    onMailClick={handleMailClick}
    userId={user?.id}
    userDisplayName={user.username}
    userFollowerCount={user.followerCount}
    userJoinDate={DateTime.fromISO(user.createdAt).toLocaleString(
      { month: "short", year: "numeric" }
    )}
    userProfileImg={user.approvedProfileImages?.[0]?.imageUrl}
  />
}

export default ProfileUserModuleItemContainer