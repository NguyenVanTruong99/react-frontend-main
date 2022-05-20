/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserCollectionBase
// ====================================================

export interface UserCollectionBase_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UserCollectionBase_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: UserCollectionBase_user_approvedProfileImages[] | null;
}

export interface UserCollectionBase_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface UserCollectionBase_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface UserCollectionBase {
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
  user: UserCollectionBase_user;
  collectionType: UserCollectionBase_collectionType;
  userId: string;
  userCollectionFollowers: UserCollectionBase_userCollectionFollowers[];
}
