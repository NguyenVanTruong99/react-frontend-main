/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListMyShowcases
// ====================================================

export interface ListMyShowcases_listMyShowcases_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListMyShowcases_listMyShowcases_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: ListMyShowcases_listMyShowcases_user_approvedProfileImages[] | null;
}

export interface ListMyShowcases_listMyShowcases_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface ListMyShowcases_listMyShowcases_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface ListMyShowcases_listMyShowcases {
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
  user: ListMyShowcases_listMyShowcases_user;
  collectionType: ListMyShowcases_listMyShowcases_collectionType;
  userId: string;
  userCollectionFollowers: ListMyShowcases_listMyShowcases_userCollectionFollowers[];
  followingOwner: boolean;
}

export interface ListMyShowcases {
  /**
   * List showcases for authed user
   */
  listMyShowcases: ListMyShowcases_listMyShowcases[];
}

export interface ListMyShowcasesVariables {
  offsetAttributes?: OffsetAttributes | null;
  viewerUserId?: string | null;
}
