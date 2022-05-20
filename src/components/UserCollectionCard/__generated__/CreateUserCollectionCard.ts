/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserCollectionCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCollectionCard
// ====================================================

export interface CreateUserCollectionCard_createUserCollectionCard {
  __typename: "UserCollectionCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  userCardId: string;
  userCollectionId: string;
}

export interface CreateUserCollectionCard {
  createUserCollectionCard: CreateUserCollectionCard_createUserCollectionCard | null;
}

export interface CreateUserCollectionCardVariables {
  input: CreateUserCollectionCardInput;
}
