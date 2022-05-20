/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteUserCollectionCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserCollectionCard
// ====================================================

export interface DeleteUserCollectionCard_deleteUserCollectionCard {
  __typename: "UserCollectionCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  userCardId: string;
  userCollectionId: string;
}

export interface DeleteUserCollectionCard {
  deleteUserCollectionCard: DeleteUserCollectionCard_deleteUserCollectionCard | null;
}

export interface DeleteUserCollectionCardVariables {
  input: DeleteUserCollectionCardInput;
}
