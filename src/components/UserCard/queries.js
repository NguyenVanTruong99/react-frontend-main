import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const searchUserCards = gql`
  query SearchUserCards(
    $offsetAttributes: OffsetAttributes
    $sortAttributes: SortAttributes
    $filterAttributes: CardFilterAttributes
    $term: String!
  ) {
    searchUserCards(
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
          userCard {
            ...UserCardBase
          }
        }
        type
      }
    }
  }
  ${baseFragment}
`;

const searchUserCardsOther = gql`
  query SearchUserCardsOther(
    $offsetAttributes: OffsetAttributes
    $sortAttributes: SortAttributes
    $filterAttributes: CardFilterAttributes
    $term: String!
  ) {
    searchUserCardsOther(
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
          userCard {
            ...UserCardBase
          }
        }
        type
      }
    }
  }
  ${baseFragment}
`;

const listMyUnmatchedUserCards = gql`
  query ListMyUnmatchedUserCards($offsetAttributes: OffsetAttributes) {
    listMyUnmatchedUserCards(offsetAttributes: $offsetAttributes) {
      ...UserCardBase
    }
  }
  ${baseFragment}
`;

const listMyStagedUserCards = gql`
  query ListMyStagedUserCards($offsetAttributes: OffsetAttributes) {
    listMyStagedUserCards(offsetAttributes: $offsetAttributes) {
      ...UserCardBase
    }
  }
  ${baseFragment}
`;

const getUserCard = gql`
  query GetUserCard($id: ID!) {
    getUserCard(id: $id) {
      ...UserCardBase
      userCardDetails {
        id
        detailName
      }
    }
  }
  ${baseFragment}
`;

const listUserCards = gql`
  query ListUserCards(
    $offsetAttributes: OffsetAttributes
    $userCardIds: [ID!]
  ) {
    listUserCards(
      offsetAttributes: $offsetAttributes
      userCardIds: $userCardIds
    ) {
      ...UserCardBase
      userCardDetails {
        id
        detailName
      }
    }
  }
  ${baseFragment}
`;

const listMyUserCards = gql`
  query ListMyUserCards {
    listMyUserCards {
      cardId
    }
  }
`;

export {
  getUserCard,
  listUserCards,
  listMyUserCards,
  listMyStagedUserCards,
  listMyUnmatchedUserCards,
  searchUserCards,
  searchUserCardsOther,
};
