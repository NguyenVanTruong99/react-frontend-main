import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserBase on User {
    id
    username
    collectionValue(playerId: $playerId, sportId: $sportId)
    investment(playerId: $playerId, sportId: $sportId)
    cardCount(playerId: $playerId, sportId: $sportId)
    followers {
      id
      followingId
      userId
    }
    followerCount
    followingCount
    createdAt
  }
`;

export { baseFragment };
