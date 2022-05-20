/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: CardGradeBase
// ====================================================

export interface CardGradeBase_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CardGradeBase_grade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  grade: number;
  gradeLabel: string | null;
  gradeVendorId: string;
  gradeDisplay: string | null;
  gradeVendor: CardGradeBase_grade_gradeVendor;
}

export interface CardGradeBase_gradeVendor {
  __typename: "GradeVendor";
  name: GradeVendorName;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CardGradeBase {
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
  grade: CardGradeBase_grade;
  gradeVendor: CardGradeBase_gradeVendor;
}
