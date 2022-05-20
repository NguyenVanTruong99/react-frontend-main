/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListCompsByCardGradeId
// ====================================================

export interface ListCompsByCardGradeId_listCompsByCardGradeId {
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

export interface ListCompsByCardGradeId {
  listCompsByCardGradeId: ListCompsByCardGradeId_listCompsByCardGradeId[];
}

export interface ListCompsByCardGradeIdVariables {
  cardGradeId: string;
  offsetAttributes?: OffsetAttributes | null;
  startDate?: any | null;
}
