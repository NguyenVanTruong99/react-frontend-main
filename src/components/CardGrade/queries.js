import { baseFragment } from "./fragments";
import gql from "graphql-tag";

const listCardGradesByUserIdAndPlayerId = gql`
  query ListCardGradesByUserIdAndPlayerId($userId: ID!, $playerId: ID!) {
    listCardGradesByUserIdAndPlayerId(userId: $userId, playerId: $playerId) {
      ...CardGradeBase
    }
  }
  ${baseFragment}
`;

const listCardGradesByCardId = gql`
  query listCardGradesByCardId($cardId: ID!) {
    listCardGradesByCardId(cardId: $cardId) {
      ...CardGradeBase
    }
  }
  ${baseFragment}
`;

const getCardGrade = gql`
  query GetCardGrade($id: ID!, $startDate: ISO8601DateTime) {
    getCardGrade(id: $id, startDate: $startDate) {
      id
      createdAt
      updatedAt
      gradeId
      gradeVendorId
      cardId
      gradePop
      startValue(startDate: $startDate)
      currentValue
      lastSold
      salesCount(startDate: $startDate)

      grade {
        id
        grade
        gradeLabel
        gradeDisplay
        gradeVendorId
        gradeVendor {
          id
          name
        }
      }

      gradeVendor {
        name
        id
      }
    }
  }
`;

export {
  listCardGradesByUserIdAndPlayerId,
  listCardGradesByCardId,
  getCardGrade,
};
