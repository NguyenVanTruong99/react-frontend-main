import gql from "graphql-tag";

const createUserFollower = gql`
  mutation CreateUserFollower($input: CreateUserFollowerInput!) {
    createUserFollower(input: $input) {
      id
    }
  }
`;

const deleteUserFollower = gql`
  mutation DeleteUserFollower($input: DeleteUserFollowerInput!) {
    deleteUserFollower(input: $input) {
      id
    }
  }
`;

export { createUserFollower, deleteUserFollower };
