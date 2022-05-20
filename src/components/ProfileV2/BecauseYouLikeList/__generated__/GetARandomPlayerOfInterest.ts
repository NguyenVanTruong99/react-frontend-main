/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetARandomPlayerOfInterest
// ====================================================

export interface GetARandomPlayerOfInterest_getARandomPlayerOfInterest {
  __typename: "Player";
  fullName: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetARandomPlayerOfInterest {
  /**
   * Gets a random player the current user is interested in
   */
  getARandomPlayerOfInterest: GetARandomPlayerOfInterest_getARandomPlayerOfInterest | null;
}
