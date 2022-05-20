/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserCollectionInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserCollection
// ====================================================

export interface UpdateUserCollection_updateUserCollection_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UpdateUserCollection_updateUserCollection_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: UpdateUserCollection_updateUserCollection_user_approvedProfileImages[] | null;
}

export interface UpdateUserCollection_updateUserCollection_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface UpdateUserCollection_updateUserCollection_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface UpdateUserCollection_updateUserCollection {
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
  user: UpdateUserCollection_updateUserCollection_user;
  collectionType: UpdateUserCollection_updateUserCollection_collectionType;
  userId: string;
  userCollectionFollowers: UpdateUserCollection_updateUserCollection_userCollectionFollowers[];
}

export interface UpdateUserCollection {
  updateUserCollection: UpdateUserCollection_updateUserCollection | null;
}

export interface UpdateUserCollectionVariables {
  input: UpdateUserCollectionInput;
}
