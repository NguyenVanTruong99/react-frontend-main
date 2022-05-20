import gql from "graphql-tag";

import { baseFragment } from "./fragments";

const listSalesByCardGradeId = gql`
  query ListCardGradesByCardIdd(
    $cardGradeId: ID!
    $startDate: ISO8601DateTime
    $after: String
  ) {
    listSalesByCardGradeId(
      cardGradeId: $cardGradeId
      startDate: $startDate
      after: $after
      first: 12
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          ...SaleBase
        }
      }
    }
  }
  ${baseFragment}
`;

export { listSalesByCardGradeId };
