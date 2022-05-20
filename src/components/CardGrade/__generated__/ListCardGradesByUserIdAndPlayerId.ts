/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListCardGradesByUserIdAndPlayerId
// ====================================================

export interface ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId_grade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  grade: number;
  gradeLabel: string | null;
  gradeVendorId: string;
  gradeDisplay: string | null;
  gradeVendor: ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId_grade_gradeVendor;
}

export interface ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId_gradeVendor {
  __typename: "GradeVendor";
  name: GradeVendorName;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId {
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
  grade: ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId_grade;
  gradeVendor: ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId_gradeVendor;
}

export interface ListCardGradesByUserIdAndPlayerId {
  /**
   * List card grades
   */
  listCardGradesByUserIdAndPlayerId: ListCardGradesByUserIdAndPlayerId_listCardGradesByUserIdAndPlayerId[];
}

export interface ListCardGradesByUserIdAndPlayerIdVariables {
  userId: string;
  playerId: string;
}
