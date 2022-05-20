import gql from "graphql-tag";

import { baseFragment } from "./fragments";

const listUserValuesByUserId = gql`
  query ListUserValuesByUserId(
    $userId: ID!
    $sportId: ID
    $offsetAttributes: OffsetAttributes
    $startDate: ISO8601DateTime
  ) {
    listUserValuesByUserId(
      offsetAttributes: $offsetAttributes
      sportId: $sportId
      userId: $userId
      startDate: $startDate
    ) {
      ...UserValueBase
    }
  }
  ${baseFragment}
`;

export { listUserValuesByUserId };
