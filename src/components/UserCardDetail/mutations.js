import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const addUserCardDetailToUserCard = gql`
  mutation AddUserCardDetailToUserCard(
    $input: AddUserCardDetailToUserCardInput!
  ) {
    addUserCardDetailToUserCard(input: $input) {
      ...UserCardDetailBase
    }
  }
  ${baseFragment}
`;

const removeUserCardDetailFromUserCard = gql`
  mutation RemoveUserCardDetailFromUserCard(
    $input: RemoveUserCardDetailFromUserCardInput!
  ) {
    removeUserCardDetailFromUserCard(input: $input) {
      ...UserCardDetailBase
    }
  }
  ${baseFragment}
`;

export { addUserCardDetailToUserCard, removeUserCardDetailFromUserCard };
