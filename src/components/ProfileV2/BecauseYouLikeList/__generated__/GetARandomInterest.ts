/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetARandomInterest
// ====================================================

export interface GetARandomInterest_getARandomInterest {
  __typename: "Interest";
  name: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetARandomInterest {
  /**
   * Gets a random interest the current user is interested in
   */
  getARandomInterest: GetARandomInterest_getARandomInterest | null;
}
