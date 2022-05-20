/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteUserFollowerInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserFollower
// ====================================================

export interface DeleteUserFollower_deleteUserFollower {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface DeleteUserFollower {
  deleteUserFollower: DeleteUserFollower_deleteUserFollower | null;
}

export interface DeleteUserFollowerVariables {
  input: DeleteUserFollowerInput;
}
