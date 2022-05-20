/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListCountries
// ====================================================

export interface ListCountries_listCountries {
  __typename: "Country";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string | null;
  iso2: string | null;
}

export interface ListCountries {
  /**
   * List all countries
   */
  listCountries: ListCountries_listCountries[];
}
