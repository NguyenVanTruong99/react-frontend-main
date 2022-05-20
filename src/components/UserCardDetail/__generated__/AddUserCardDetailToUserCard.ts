/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddUserCardDetailToUserCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddUserCardDetailToUserCard
// ====================================================

export interface AddUserCardDetailToUserCard_addUserCardDetailToUserCard {
  __typename: "UserCardDetail";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  detailName: string;
}

export interface AddUserCardDetailToUserCard {
  addUserCardDetailToUserCard: AddUserCardDetailToUserCard_addUserCardDetailToUserCard | null;
}

export interface AddUserCardDetailToUserCardVariables {
  input: AddUserCardDetailToUserCardInput;
}
