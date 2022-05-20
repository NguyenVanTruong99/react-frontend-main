/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RemoveUserCardDetailFromUserCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: RemoveUserCardDetailFromUserCard
// ====================================================

export interface RemoveUserCardDetailFromUserCard_removeUserCardDetailFromUserCard {
  __typename: "UserCardDetail";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  detailName: string;
}

export interface RemoveUserCardDetailFromUserCard {
  removeUserCardDetailFromUserCard: RemoveUserCardDetailFromUserCard_removeUserCardDetailFromUserCard | null;
}

export interface RemoveUserCardDetailFromUserCardVariables {
  input: RemoveUserCardDetailFromUserCardInput;
}
