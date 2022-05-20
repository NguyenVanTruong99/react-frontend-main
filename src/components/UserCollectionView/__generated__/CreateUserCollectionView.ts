/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserCollectionViewInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCollectionView
// ====================================================

export interface CreateUserCollectionView_createUserCollectionView {
  __typename: "UserCollectionView";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCollectionView {
  createUserCollectionView: CreateUserCollectionView_createUserCollectionView | null;
}

export interface CreateUserCollectionViewVariables {
  input: CreateUserCollectionViewInput;
}
