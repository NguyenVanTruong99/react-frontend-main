import gql from "graphql-tag";

const createUserCollectionFollower = gql`
  mutation CreateUserCollectionFollower(
    $input: CreateUserCollectionFollowerInput!
  ) {
    createUserCollectionFollower(input: $input) {
      id
    }
  }
`;

const deleteUserCollectionFollower = gql`
  mutation DeleteUserCollectionFollower(
    $input: DeleteUserCollectionFollowerInput!
  ) {
    deleteUserCollectionFollower(input: $input) {
      id
    }
  }
`;

export { createUserCollectionFollower, deleteUserCollectionFollower };
