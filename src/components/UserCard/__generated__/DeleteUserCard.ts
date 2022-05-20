/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteUserCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserCard
// ====================================================

export interface DeleteUserCard_deleteUserCard {
  __typename: "UserCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface DeleteUserCard {
  deleteUserCard: DeleteUserCard_deleteUserCard | null;
}

export interface DeleteUserCardVariables {
  input: DeleteUserCardInput;
}
