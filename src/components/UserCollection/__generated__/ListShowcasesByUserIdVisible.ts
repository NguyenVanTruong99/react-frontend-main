/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListShowcasesByUserIdVisible
// ====================================================

export interface ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_user_approvedProfileImages[] | null;
}

export interface ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible {
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
  user: ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_user;
  collectionType: ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_collectionType;
  userId: string;
  userCollectionFollowers: ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible_userCollectionFollowers[];
}

export interface ListShowcasesByUserIdVisible {
  /**
   * List public visible showcases for a user id
   */
  listShowcasesByUserIdVisible: ListShowcasesByUserIdVisible_listShowcasesByUserIdVisible[];
}

export interface ListShowcasesByUserIdVisibleVariables {
  userId: string;
  offsetAttributes?: OffsetAttributes | null;
}
