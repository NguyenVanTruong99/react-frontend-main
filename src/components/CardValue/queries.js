import gql from "graphql-tag";

import { baseFragment } from "./fragments";

const listCardValuesByCardGradeId = gql`
  query ListCardValuesByCardGradeId(
    $cardGradeId: ID!
    $offsetAttributes: OffsetAttributes
    $startDate: ISO8601DateTime
  ) {
    listCardValuesByCardGradeId(
      offsetAttributes: $offsetAttributes
      cardGradeId: $cardGradeId
      startDate: $startDate
    ) {
      ...CardValueBase
    }
  }
  ${baseFragment}
`;

export { listCardValuesByCardGradeId };
