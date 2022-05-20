import { baseFragment } from "components/Card/fragments";
import gql from "graphql-tag";

const getWantListCardByUserIdAndCardId = gql`
  query GetWantListCardByUserIdAndCardId($userId: ID!, $cardId: ID!) {
    getWantListCardByUserIdAndCardId(cardId: $cardId, userId: $userId) {
      id
      budgetHigh
      budgetLow
      willTradeFor
      isHigher
      willBuy
      cardGradeId
      comment
      card {
        ...CardBase
      }
    }
  }
  ${baseFragment}
`;

const getCardGrade = gql`
  query GetCardGraded($getCardGradeId: ID!) {
  getCardGrade(id: $getCardGradeId) {
    grade {
      createdAt
      grade
      gradeLabel
      gradeDisplay
      gradeVendorId
      gradeVendor {
        id
        name
      }
      id
      updatedAt
    }
  }
}
  ${baseFragment}
`;

const listMyWantListCards = gql`
  query ListMyWantListCards($offsetAttributes: OffsetAttributes) {
    listMyWantListCards(offsetAttributes: $offsetAttributes) {
      id
      budgetHigh
      budgetLow
      willTradeFor
      isHigher
      willBuy
      cardGradeId
      comment
      card {
        ...CardBase
      }
    }
  }
  ${baseFragment}
`;

export { getWantListCardByUserIdAndCardId, listMyWantListCards, getCardGrade };
