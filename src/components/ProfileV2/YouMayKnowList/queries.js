import { gql } from "@apollo/client"

const listMyRecommendedFriendsQuery = gql`
  query ListMyRecommendedFriends {
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
