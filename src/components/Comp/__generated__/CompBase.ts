/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CompBase
// ====================================================

export interface CompBase {
  __typename: "Comp";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  cardId: string;
  cardGradeId: string;
  compSourceId: string;
  valuedStartDate: any;
  valuedEndDate: any | null;
  value: number;
}
