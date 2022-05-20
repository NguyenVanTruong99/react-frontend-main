/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteUserCollectionInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserCollection
// ====================================================

export interface DeleteUserCollection_deleteUserCollection_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface DeleteUserCollection_deleteUserCollection_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: DeleteUserCollection_deleteUserCollection_user_approvedProfileImages[] | null;
}

export interface DeleteUserCollection_deleteUserCollection_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface DeleteUserCollection_deleteUserCollection_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface DeleteUserCollection_deleteUserCollection {
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
  user: DeleteUserCollection_deleteUserCollection_user;
  collectionType: DeleteUserCollection_deleteUserCollection_collectionType;
  userId: string;
  userCollectionFollowers: DeleteUserCollection_deleteUserCollection_userCollectionFollowers[];
}

export interface DeleteUserCollection {
  deleteUserCollection: DeleteUserCollection_deleteUserCollection | null;
}

export interface DeleteUserCollectionVariables {
  input: DeleteUserCollectionInput;
}
