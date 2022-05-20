/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListCardValuesByCardGradeId
// ====================================================

export interface ListCardValuesByCardGradeId_listCardValuesByCardGradeId {
  __typename: "CardValue";
  avgSale: number | null;
  cardGradeId: string;
  valuedDate: any;
  count: number;
  value: number | null;
}

export interface ListCardValuesByCardGradeId {
  listCardValuesByCardGradeId: ListCardValuesByCardGradeId_listCardValuesByCardGradeId[];
}

export interface ListCardValuesByCardGradeIdVariables {
  cardGradeId: string;
  offsetAttributes?: OffsetAttributes | null;
  startDate?: any | null;
}
