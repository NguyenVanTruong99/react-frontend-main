import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const deleteUserCollection = gql`
  mutation DeleteUserCollection($input: DeleteUserCollectionInput!) {
    deleteUserCollection(input: $input) {
      ...UserCollectionBase
    }
  }
  ${baseFragment}
`;

const createUserCollection = gql`
  mutation CreateUserCollection($input: CreateUserCollectionInput!) {
    createUserCollection(input: $input) {
      ...UserCollectionBase
    }
  }
  ${baseFragment}
`;

const updateUserCollection = gql`
  mutation UpdateUserCollection($input: UpdateUserCollectionInput!) {
    updateUserCollection(input: $input) {
      ...UserCollectionBase
    }
  }
  ${baseFragment}
`;

const updateUserCollections = gql`
  mutation UpdateUserCollections($input: UpdateUserCollectionsInput!) {
    updateUserCollections(input: $input) {
      ...UserCollectionBase
    }
  }
  ${baseFragment}
`;

export {
  updateUserCollection,
  updateUserCollections,
  createUserCollection,
  deleteUserCollection,
};
