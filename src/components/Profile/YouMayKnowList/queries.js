import { gql } from "@apollo/client"

const listMyRecommendedFriendsQuery = gql`
  query ListMyRecommendedFriendsd {
    listMyRecommendedFriends {
      id
      username
      followerCount
      createdAt
      approvedProfileImages {
        imageUrl
      }
    }
  }
`;

export {
  listMyRecommendedFriendsQuery
}
