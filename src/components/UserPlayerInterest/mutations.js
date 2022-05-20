import gql from "graphql-tag";

const createList = gql`
  mutation CreateUserPlayerInterests($input: CreateUserPlayerInterestsInput!) {
    createUserPlayerInterests(input: $input) {
      user {
        id
      }
      player {
        id
      }
    }
  }
`;

export { createList as createUserPlayerInterests };
