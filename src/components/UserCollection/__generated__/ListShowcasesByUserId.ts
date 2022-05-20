/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListShowcasesByUserId
// ====================================================

export interface ListShowcasesByUserId_listShowcasesByUserId_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListShowcasesByUserId_listShowcasesByUserId_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: ListShowcasesByUserId_listShowcasesByUserId_user_approvedProfileImages[] | null;
}

export interface ListShowcasesByUserId_listShowcasesByUserId_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface ListShowcasesByUserId_listShowcasesByUserId_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface ListShowcasesByUserId_listShowcasesByUserId {
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
  user: ListShowcasesByUserId_listShowcasesByUserId_user;
  collectionType: ListShowcasesByUserId_listShowcasesByUserId_collectionType;
  userId: string;
  userCollectionFollowers: ListShowcasesByUserId_listShowcasesByUserId_userCollectionFollowers[];
  followingOwner: boolean;
}

export interface ListShowcasesByUserId {
  /**
   * List public showcases for a user id
   */
  listShowcasesByUserId: ListShowcasesByUserId_listShowcasesByUserId[];
}

export interface ListShowcasesByUserIdVariables {
  userId: string;
  offsetAttributes?: OffsetAttributes | null;
  viewerUserId?: string | null;
}
