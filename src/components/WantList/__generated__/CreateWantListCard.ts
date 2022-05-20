/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWantListCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateWantListCard
// ====================================================

export interface CreateWantListCard_createWantListCard {
  __typename: "WantListCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateWantListCard {
  createWantListCard: CreateWantListCard_createWantListCard | null;
}

export interface CreateWantListCardVariables {
  input: CreateWantListCardInput;
}
