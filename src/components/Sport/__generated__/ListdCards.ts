/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListdCards
// ====================================================

export interface ListdCards_listSports {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface ListdCards {
  /**
   * List all sports
   */
  listSports: ListdCards_listSports[];
}
