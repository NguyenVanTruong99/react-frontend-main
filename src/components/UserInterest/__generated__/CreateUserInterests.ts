/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInterestsInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserInterests
// ====================================================

export interface CreateUserInterests_createUserInterests_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserInterests_createUserInterests_interest {
  __typename: "Interest";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserInterests_createUserInterests {
  __typename: "UserInterest";
  user: CreateUserInterests_createUserInterests_user;
  interest: CreateUserInterests_createUserInterests_interest;
}

export interface CreateUserInterests {
  createUserInterests: CreateUserInterests_createUserInterests[] | null;
}

export interface CreateUserInterestsVariables {
  input: CreateUserInterestsInput;
}
