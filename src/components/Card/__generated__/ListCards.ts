/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListCards
// ====================================================

export interface ListCards_listCards {
  __typename: "Card";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  hasImage: boolean | null;
}

export interface ListCards {
  /**
   * List all cards
   */
  listCards: ListCards_listCards[];
}

export interface ListCardsVariables {
  offsetAttributes?: OffsetAttributes | null;
}
