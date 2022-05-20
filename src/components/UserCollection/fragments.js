import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserCollectionBase on UserCollection {
    id
    name
    updatedAt
    description
    createdAt
    views
    coverImageUrl
    cardCount
    isPublic
    isFeatured
    isVisible
    user {
      username
      id
      createdAt
      approvedProfileImages {
        imageUrl
      }
    }
    collectionType {
      name
    }
    userId
    userCollectionFollowers {
      userId
    }
  }
`;

export { baseFragment };
