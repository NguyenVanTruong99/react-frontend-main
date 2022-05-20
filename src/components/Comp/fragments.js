import gql from "graphql-tag";

const baseFragment = gql`
  fragment CompBase on Comp {
    id
    cardId
    cardGradeId
    compSourceId
    valuedStartDate
    valuedEndDate
    value
  }
`;

export { baseFragment };
