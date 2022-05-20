/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListGrades
// ====================================================

export interface ListGrades_listGrades_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListGrades_listGrades {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  grade: number;
  gradeLabel: string | null;
  gradeDisplay: string | null;
  gradeVendorId: string;
  gradeVendor: ListGrades_listGrades_gradeVendor;
}

export interface ListGrades {
  /**
   * List all grades
   */
  listGrades: ListGrades_listGrades[];
}

export interface ListGradesVariables {
  offsetAttributes?: OffsetAttributes | null;
}
