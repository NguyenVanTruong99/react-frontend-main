/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetARandomPlayerOfInterestd
// ====================================================

export interface GetARandomPlayerOfInterestd_getARandomPlayerOfInterest {
  __typename: "Player";
  fullName: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetARandomPlayerOfInterestd {
  /**
   * Gets a random player the current user is interested in
   */
  getARandomPlayerOfInterest: GetARandomPlayerOfInterestd_getARandomPlayerOfInterest | null;
}
