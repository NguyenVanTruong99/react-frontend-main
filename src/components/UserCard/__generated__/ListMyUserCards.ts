/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListMyUserCards
// ====================================================

export interface ListMyUserCards_listMyUserCards {
  __typename: "UserCard";
  cardId: string | null;
}

export interface ListMyUserCards {
  /**
   * List user cards for the authenticated user
   */
  listMyUserCards: ListMyUserCards_listMyUserCards[];
}
