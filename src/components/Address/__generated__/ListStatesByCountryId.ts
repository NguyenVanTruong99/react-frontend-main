/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListStatesByCountryId
// ====================================================

export interface ListStatesByCountryId_listStatesByCountryId_country {
  __typename: "Country";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListStatesByCountryId_listStatesByCountryId {
  __typename: "State";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string | null;
  stateCode: string | null;
  country: ListStatesByCountryId_listStatesByCountryId_country | null;
}

export interface ListStatesByCountryId {
  /**
   * List all countries
   */
  listStatesByCountryId: ListStatesByCountryId_listStatesByCountryId[];
}

export interface ListStatesByCountryIdVariables {
  countryId: string;
}
