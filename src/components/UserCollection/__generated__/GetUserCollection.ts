/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserCollection
// ====================================================

export interface GetUserCollection_getUserCollection_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface GetUserCollection_getUserCollection_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: GetUserCollection_getUserCollection_user_approvedProfileImages[] | null;
}

export interface GetUserCollection_getUserCollection_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface GetUserCollection_getUserCollection_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface GetUserCollection_getUserCollection {
  __typename: "UserCollection";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string | null;
  /**
   * The date and time that the resource was last updated.
   */
  updatedAt: any;
  description: string | null;
  /**
   * The date and time that the resource was created.
   */
  createdAt: any;
  views: number;
  coverImageUrl: string | null;
  cardCount: number;
  isPublic: boolean | null;
  isFeatured: boolean | null;
  isVisible: boolean | null;
  user: GetUserCollection_getUserCollection_user;
  collectionType: GetUserCollection_getUserCollection_collectionType;
  userId: string;
  userCollectionFollowers: GetUserCollection_getUserCollection_userCollectionFollowers[];
  followingOwner: boolean;
}

export interface GetUserCollection {
  /**
   * Find a user collection by ID
   */
  getUserCollection: GetUserCollection_getUserCollection;
}

export interface GetUserCollectionVariables {
  id: string;
  viewerUserId?: string | null;
}
