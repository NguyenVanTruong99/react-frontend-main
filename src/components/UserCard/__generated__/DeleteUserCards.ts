/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteUserCardsInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserCards
// ====================================================

export interface DeleteUserCards_deleteUserCards {
  __typename: "UserCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface DeleteUserCards {
  deleteUserCards: DeleteUserCards_deleteUserCards[] | null;
}

export interface DeleteUserCardsVariables {
  input: DeleteUserCardsInput;
}
