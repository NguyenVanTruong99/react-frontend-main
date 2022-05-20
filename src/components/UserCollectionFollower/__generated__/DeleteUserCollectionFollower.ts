/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteUserCollectionFollowerInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserCollectionFollower
// ====================================================

export interface DeleteUserCollectionFollower_deleteUserCollectionFollower {
  __typename: "UserCollectionFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface DeleteUserCollectionFollower {
  deleteUserCollectionFollower: DeleteUserCollectionFollower_deleteUserCollectionFollower | null;
}

export interface DeleteUserCollectionFollowerVariables {
  input: DeleteUserCollectionFollowerInput;
}
