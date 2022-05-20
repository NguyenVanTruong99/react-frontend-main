import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const getUserProfile = gql`
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      ...UserProfileBase
    }
  }
  ${baseFragment}
`;

export { getUserProfile };
