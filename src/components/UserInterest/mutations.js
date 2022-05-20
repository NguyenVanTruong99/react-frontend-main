import gql from "graphql-tag";

const createList = gql`
  mutation CreateUserInterests($input: CreateUserInterestsInput!) {
    createUserInterests(input: $input) {
      user {
        id
      }
      interest {
        id
      }
    }
  }
`;

export { createList as createUserInterests };
