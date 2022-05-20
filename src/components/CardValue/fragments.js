import gql from "graphql-tag";

const baseFragment = gql`
  fragment CardValueBase on CardValue {
    avgSale
    cardGradeId
    valuedDate
    count
    value
  }
`;

export { baseFragment };
