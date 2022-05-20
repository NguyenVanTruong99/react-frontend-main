import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const updateUserProfile = gql`
  mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
    updateUserProfile(input: $input) {
      ...UserProfileBase
    }
  }
  ${baseFragment}
`;

export { updateUserProfile };
