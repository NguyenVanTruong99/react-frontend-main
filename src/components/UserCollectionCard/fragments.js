import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserCollectionCardBase on UserCollectionCard {
    id
    userCardId
    userCollectionId
  }
`;

export { baseFragment };
