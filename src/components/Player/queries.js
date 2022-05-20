import { baseFragment } from "./fragments";
import gql from "graphql-tag";

const searchPlayers = gql`
  query SearchPlayers(
    $term: String!
    $offsetAttributes: OffsetAttributes
    $sortAttributes: SortAttributes
  ) {
    searchPlayers(
      term: $term
      offsetAttributes: $offsetAttributes
      sortAttributes: $sortAttributes
    ) {
      results {
        count
        items {
          id
          type
          player {
            ...PlayerBase
          }
        }
        type
      }
    }
  }
  ${baseFragment}
`;

const getPlayer = gql`
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      ...PlayerBase
    }
  }
  ${baseFragment}
`;

const listPlayersById = gql`
  query ListPlayersById($ids: [ID!]!) {
    listPlayersById(ids: $ids) {
      ...PlayerBase
    }
  }
  ${baseFragment}
`;

export { getPlayer, listPlayersById, searchPlayers };
