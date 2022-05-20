import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const createUserCardByCertNumberAndService = gql`
  mutation CreateUserCardByCertNumberAndService(
    $certNumber: String!
    $service: String!
  ) {
    createUserCardByCertNumberAndService(
      certNumber: $certNumber
      service: $service
    ) {
      ...UserCardBase
    }
  }
  ${baseFragment}
`;

const createUserCardByImageUpload = gql`
  mutation CreateUserCardByImageUpload($image: Upload!) {
    createUserCardByImageUpload(image: $image) {
      ...UserCardBase
    }
  }
  ${baseFragment}
`;

const deleteUserCard = gql`
  mutation DeleteUserCard($input: DeleteUserCardInput!) {
    deleteUserCard(input: $input) {
      id
    }
  }
`;

const deleteUserCards = gql`
  mutation DeleteUserCards($input: DeleteUserCardsInput!) {
    deleteUserCards(input: $input) {
      id
    }
  }
`;

const createUserCard = gql`
  mutation CreateUserCard($input: CreateUserCardInput!) {
    createUserCard(input: $input) {
      ...UserCardBase
    }
  }
  ${baseFragment}
`;

// const createUserCards = gql`
//   mutation CreateUserCards($input: CreateUserCardInput!) {
//     createUserCards(input: $input) {
//       ...UserCardBase
//     }
//   }
//   ${baseFragment}
// `;

const updateUserCard = gql`
  mutation UpdateUserCard($input: UpdateUserCardInput!) {
    updateUserCard(input: $input) {
      ...UserCardBase
    }
  }
  ${baseFragment}
`;

export {
  createUserCard,
  // createUserCards,
  createUserCardByCertNumberAndService,
  createUserCardByImageUpload,
  deleteUserCard,
  deleteUserCards,
  updateUserCard,
};
