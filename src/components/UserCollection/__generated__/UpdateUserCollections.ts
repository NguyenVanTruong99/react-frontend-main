/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserCollectionsInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserCollections
// ====================================================

export interface UpdateUserCollections_updateUserCollections_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UpdateUserCollections_updateUserCollections_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: UpdateUserCollections_updateUserCollections_user_approvedProfileImages[] | null;
}

export interface UpdateUserCollections_updateUserCollections_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface UpdateUserCollections_updateUserCollections_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface UpdateUserCollections_updateUserCollections {
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
  user: UpdateUserCollections_updateUserCollections_user;
  collectionType: UpdateUserCollections_updateUserCollections_collectionType;
  userId: string;
  userCollectionFollowers: UpdateUserCollections_updateUserCollections_userCollectionFollowers[];
}

export interface UpdateUserCollections {
  updateUserCollections: UpdateUserCollections_updateUserCollections[] | null;
}

export interface UpdateUserCollectionsVariables {
  input: UpdateUserCollectionsInput;
}
