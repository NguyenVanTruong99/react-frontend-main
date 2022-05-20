/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListGradeVendors
// ====================================================

export interface ListGradeVendors_listGradeVendors {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListGradeVendors {
  /**
   * List all grade_vendors
   */
  listGradeVendors: ListGradeVendors_listGradeVendors[];
}

export interface ListGradeVendorsVariables {
  offsetAttributes?: OffsetAttributes | null;
}
