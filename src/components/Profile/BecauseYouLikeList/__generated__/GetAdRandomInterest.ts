/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAdRandomInterest
// ====================================================

export interface GetAdRandomInterest_getARandomInterest {
  __typename: "Interest";
  name: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetAdRandomInterest {
  /**
   * Gets a random interest the current user is interested in
   */
  getARandomInterest: GetAdRandomInterest_getARandomInterest | null;
}
