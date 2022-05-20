/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserCollectionFollowerInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCollectionFollower
// ====================================================

export interface CreateUserCollectionFollower_createUserCollectionFollower {
  __typename: "UserCollectionFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCollectionFollower {
  createUserCollectionFollower: CreateUserCollectionFollower_createUserCollectionFollower | null;
}

export interface CreateUserCollectionFollowerVariables {
  input: CreateUserCollectionFollowerInput;
}
