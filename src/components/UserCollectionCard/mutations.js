import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const createUserCollectionCard = gql`
  mutation CreateUserCollectionCard($input: CreateUserCollectionCardInput!) {
    createUserCollectionCard(input: $input) {
      ...UserCollectionCardBase
    }
  }
  ${baseFragment}
`;

const deleteUserCollectionCard = gql`
  mutation DeleteUserCollectionCard($input: DeleteUserCollectionCardInput!) {
    deleteUserCollectionCard(input: $input) {
      ...UserCollectionCardBase
    }
  }
  ${baseFragment}
`;

export { deleteUserCollectionCard, createUserCollectionCard };
