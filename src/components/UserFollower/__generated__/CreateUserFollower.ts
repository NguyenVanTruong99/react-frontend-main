/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserFollowerInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserFollower
// ====================================================

export interface CreateUserFollower_createUserFollower {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserFollower {
  createUserFollower: CreateUserFollower_createUserFollower | null;
}

export interface CreateUserFollowerVariables {
  input: CreateUserFollowerInput;
}
