/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserPlayerInterestsInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserPlayerInterests
// ====================================================

export interface CreateUserPlayerInterests_createUserPlayerInterests_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserPlayerInterests_createUserPlayerInterests_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserPlayerInterests_createUserPlayerInterests {
  __typename: "UserPlayerInterest";
  user: CreateUserPlayerInterests_createUserPlayerInterests_user;
  player: CreateUserPlayerInterests_createUserPlayerInterests_player;
}

export interface CreateUserPlayerInterests {
  createUserPlayerInterests: CreateUserPlayerInterests_createUserPlayerInterests[] | null;
}

export interface CreateUserPlayerInterestsVariables {
  input: CreateUserPlayerInterestsInput;
}
