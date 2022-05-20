import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const deleteUserCardImage = gql`
  mutation DeleteUserCardImage($input: DeleteUserCardImageInput!) {
    deleteUserCardImage(input: $input) {
      ...UserCardImageBase
    }
  }
  ${baseFragment}
`;

const createUserCardImage = gql`
  mutation CreateUserCardImage($input: CreateUserCardImageInput!) {
    createUserCardImage(input: $input) {
      ...UserCardImageBase
    }
  }
  ${baseFragment}
`;

export { deleteUserCardImage, createUserCardImage };
