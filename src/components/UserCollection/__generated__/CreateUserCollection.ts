/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserCollectionInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCollection
// ====================================================

export interface CreateUserCollection_createUserCollection_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface CreateUserCollection_createUserCollection_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: CreateUserCollection_createUserCollection_user_approvedProfileImages[] | null;
}

export interface CreateUserCollection_createUserCollection_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface CreateUserCollection_createUserCollection_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface CreateUserCollection_createUserCollection {
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
  user: CreateUserCollection_createUserCollection_user;
  collectionType: CreateUserCollection_createUserCollection_collectionType;
  userId: string;
  userCollectionFollowers: CreateUserCollection_createUserCollection_userCollectionFollowers[];
}

export interface CreateUserCollection {
  createUserCollection: CreateUserCollection_createUserCollection | null;
}

export interface CreateUserCollectionVariables {
  input: CreateUserCollectionInput;
}
