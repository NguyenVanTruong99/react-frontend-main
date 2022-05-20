/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetCardGrade
// ====================================================

export interface GetCardGrade_getCardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface GetCardGrade_getCardGrade_grade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  grade: number;
  gradeLabel: string | null;
  gradeDisplay: string | null;
  gradeVendorId: string;
  gradeVendor: GetCardGrade_getCardGrade_grade_gradeVendor;
}

export interface GetCardGrade_getCardGrade_gradeVendor {
  __typename: "GradeVendor";
  name: GradeVendorName;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetCardGrade_getCardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any;
  updatedAt: any;
  gradeId: string;
  gradeVendorId: string;
  cardId: string;
  gradePop: number;
  startValue: number | null;
  currentValue: number | null;
  lastSold: number | null;
  salesCount: number | null;
  grade: GetCardGrade_getCardGrade_grade;
  gradeVendor: GetCardGrade_getCardGrade_gradeVendor;
}

export interface GetCardGrade {
  /**
   * Get a card grade by ID
   */
  getCardGrade: GetCardGrade_getCardGrade;
}

export interface GetCardGradeVariables {
  id: string;
  startDate?: any | null;
}
