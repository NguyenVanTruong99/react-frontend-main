import gql from "graphql-tag";

const listSports = gql`
  query ListdCards {
    listSports {
      id
      name
    }
  }
`;

export { listSports };
