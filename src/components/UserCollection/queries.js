import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const getUserCollection = gql`
  query GetUserCollection($id: ID!, $viewerUserId: ID) {
    getUserCollection(id: $id) {
      ...UserCollectionBase
      followingOwner(viewerUserId: $viewerUserId)
      # userCollectionCards(first: 12, after: $userCollectionCardsAfter) {
      #   nodes {
      #     id
      #     createdAt
      #     userCardId
      #     userCollectionId
      #     userCard {
      #       user {
      #         id
      #         username
      #       }
      #       cardGrade {
      #         id
      #         gradePop
      #         currentValue
      #         grade {
      #           grade
      #           gradeLabel
      #           id
      #           gradeVendor {
      #             id
      #             name
      #           }
      #         }
      #         gradeVendorId
      #         gradeVendor {
      #           id
      #           name
      #         }
      #       }
      #       card {
      #         name
      #         cardNumber
      #         frontUrl
      #         cardSet {
      #           year
      #           name
      #         }
      #       }
      #       userCardImages {
      #         imageUrl
      #         id
      #         view
      #       }
      #     }
      #   }
      # }
    }
  }
  ${baseFragment}
`;

const listMyShowcases = gql`
  query ListMyShowcases(
    $offsetAttributes: OffsetAttributes
    $viewerUserId: ID
  ) {
    listMyShowcases(offsetAttributes: $offsetAttributes) {
      ...UserCollectionBase
      followingOwner(viewerUserId: $viewerUserId)
      userCards {
        id
      }
    }
  }
  ${baseFragment}
`;

const listShowcasesByUserId = gql`
  query ListShowcasesByUserId(
    $userId: ID!
    $offsetAttributes: OffsetAttributes
    $viewerUserId: ID
  ) {
    listShowcasesByUserId(
      userId: $userId
      offsetAttributes: $offsetAttributes
    ) {
      ...UserCollectionBase
      followingOwner(viewerUserId: $viewerUserId)
    }
  }
  ${baseFragment}
`;

const listShowcasesByUserIdVisible = gql`
  query ListShowcasesByUserIdVisible(
    $userId: ID!
    $offsetAttributes: OffsetAttributes
  ) {
    listShowcasesByUserIdVisible(
      userId: $userId
      offsetAttributes: $offsetAttributes
    ) {
      ...UserCollectionBase
    }
  }
  ${baseFragment}
`;

const listShowcasesIFollow = gql`
  query ListShowcasesIFollow(
    $offsetAttributes: OffsetAttributes
    $viewerUserId: ID
  ) {
    listShowcasesIFollow(offsetAttributes: $offsetAttributes) {
      ...UserCollectionBase
      followingOwner(viewerUserId: $viewerUserId)
    }
  }
  ${baseFragment}
`;

export {
  listMyShowcases,
  listShowcasesIFollow,
  getUserCollection,
  listShowcasesByUserId,
  listShowcasesByUserIdVisible,
};
