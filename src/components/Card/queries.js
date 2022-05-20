import { baseFragment } from "./fragments";
import gql from "graphql-tag";

const list = gql`
  query ListCards($offsetAttributes: OffsetAttributes) {
    listCards(offsetAttributes: $offsetAttributes) {
      id
      hasImage
    }
  }
`;

const searchCards = gql`
  query SearchCards(
    $offsetAttributes: OffsetAttributes
    $sortAttributes: SortAttributes
    $filterAttributes: CardFilterAttributes
    $term: String!
  ) {
    searchCards(
      offsetAttributes: $offsetAttributes
      sortAttributes: $sortAttributes
      filterAttributes: $filterAttributes
      term: $term
    ) {
      results {
        count
        aggs
        items {
          id
          type
          card {
            ...CardBase
          }
        }
        type
      }
    }
  }
  ${baseFragment}
`;

const listCardsForFreeFormEntry = gql`
  query ListCardsForFreeFormEntry(
    $cardNumber: String
    $cardSetId: ID
    $manufacturerId: ID
    $offsetAttributes: OffsetAttributes
    $playerIds: [ID!]!
    $year: String!
  ) {
    listCardsForFreeFormEntry(
      cardNumber: $cardNumber
      cardSetId: $cardSetId
      manufacturerId: $manufacturerId
      offsetAttributes: $offsetAttributes
      playerIds: $playerIds
      year: $year
    ) {
      id
      name
      hasImage
      manufacturer {
        id
        name
      }
      cardSet {
        id
        name
        manufacturerId
        year
      }
    }
  }
`;

const getCard = gql`
  query GetCard($id: ID!) {
    getCard(id: $id) {
      ...CardBase
      cardGrades {
        id
        gradeVendor {
          name
          id
        }
      }
    }
  }
  ${baseFragment}
`;

const listCards = gql`
  query ListCardsss($cardIds: [String!]) {
    listCards(cardIds: $cardIds) {
      id
      cardImages {
        imageUrl
      }
      cardNumber
      cardSet {
        manufacturerId
        name
        year
        variety
        sport {
          name
        }
      }
      cardSetId
      frontUrl
      fullName
      hasImage
      manufacturer {
        name
      }
      name
      totalGraded
      totalSales
    }
  }
`;

export {
  list as listCards,
  listCardsForFreeFormEntry,
  searchCards,
  getCard,
  listCards as getCards,
};
