import { baseFragment } from "./fragments";
import gql from "graphql-tag";

const listUserFollowers = gql`
  query ListUserFollowers($userId: ID!, $query: String) {
    listUserFollowers(userId: $userId, query: $query) {
      ...UserFollowerBase
    }
  }
  ${baseFragment}
`;

const listUserFollowing = gql`
  query ListUserFollowing($userId: ID!, $query: String) {
    listUserFollowing(userId: $userId, query: $query) {
      ...UserFollowerBase
    }
  }
  ${baseFragment}
`;

const listMyUserMutualFriends = gql`
  query ListMyUserMutualFriends($userId: ID!, $query: String) {
    listMyUserMutualFriends(userId: $userId, query: $query) {
      ...UserFollowerBase
    }
  }
  ${baseFragment}
`;

export { listUserFollowers, listUserFollowing, listMyUserMutualFriends };
