/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListInterests
// ====================================================

export interface ListInterests_listInterests_category {
  __typename: "InterestCategory";
  name: string;
  slug: string;
}

export interface ListInterests_listInterests {
  __typename: "Interest";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  slug: string;
  category: ListInterests_listInterests_category;
}

export interface ListInterests {
  /**
   * List all interests
   */
  listInterests: ListInterests_listInterests[];
}
