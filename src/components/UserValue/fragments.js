import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserValueBase on UserValue {
    userId
    valuedDate
    count
    value
  }
`;

export { baseFragment };
