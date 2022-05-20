/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetCardGraded
// ====================================================

export interface GetCardGraded_getCardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface GetCardGraded_getCardGrade_grade {
  __typename: "Grade";
  createdAt: any;
  grade: number;
  gradeLabel: string | null;
  gradeDisplay: string | null;
  gradeVendorId: string;
  gradeVendor: GetCardGraded_getCardGrade_grade_gradeVendor;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  updatedAt: any;
}

export interface GetCardGraded_getCardGrade {
  __typename: "CardGrade";
  grade: GetCardGraded_getCardGrade_grade;
}

export interface GetCardGraded {
  /**
   * Get a card grade by ID
   */
  getCardGrade: GetCardGraded_getCardGrade;
}

export interface GetCardGradedVariables {
  getCardGradeId: string;
}
