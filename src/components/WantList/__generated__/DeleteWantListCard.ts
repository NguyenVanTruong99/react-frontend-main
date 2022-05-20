/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteWantListCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteWantListCard
// ====================================================

export interface DeleteWantListCard_deleteWantListCard {
  __typename: "WantListCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface DeleteWantListCard {
  deleteWantListCard: DeleteWantListCard_deleteWantListCard | null;
}

export interface DeleteWantListCardVariables {
  input: DeleteWantListCardInput;
}
