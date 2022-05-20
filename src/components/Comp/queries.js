import gql from "graphql-tag";

import { baseFragment } from "./fragments";

const listCompsByUserId = gql`
  query ListCompsByUserId(
    $offsetAttributes: OffsetAttributes
    $playerId: ID
    $sportId: ID
    $startDate: ISO8601DateTime
    $userId: ID!
  ) {
    listCompsByUserId(
      offsetAttributes: $offsetAttributes
      playerId: $playerId
      sportId: $sportId
      startDate: $startDate
      userId: $userId
    ) {
      ...CompBase
    }
  }
  ${baseFragment}
`;

const listCompsByCardGradeId = gql`
  query ListCompsByCardGradeId(
    $cardGradeId: ID!
    $offsetAttributes: OffsetAttributes
    $startDate: ISO8601DateTime
  ) {
    listCompsByCardGradeId(
      offsetAttributes: $offsetAttributes
      cardGradeId: $cardGradeId
      startDate: $startDate
    ) {
      ...CompBase
    }
  }
  ${baseFragment}
`;

const listCompsByPlayerId = gql`
  query ListCompsByPlayerId(
    $offsetAttributes: OffsetAttributes
    $playerId: ID!
    $startDate: ISO8601DateTime
  ) {
    listCompsByPlayerId(
      offsetAttributes: $offsetAttributes
      playerId: $playerId
      startDate: $startDate
    ) {
      ...CompBase
    }
  }
  ${baseFragment}
`;

export { listCompsByPlayerId, listCompsByCardGradeId, listCompsByUserId };
