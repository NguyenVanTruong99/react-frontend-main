/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListCompsByUserId
// ====================================================

export interface ListCompsByUserId_listCompsByUserId {
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

export interface ListCompsByUserId {
  listCompsByUserId: ListCompsByUserId_listCompsByUserId[];
}

export interface ListCompsByUserIdVariables {
  offsetAttributes?: OffsetAttributes | null;
  playerId?: string | null;
  sportId?: string | null;
  startDate?: any | null;
  userId: string;
}
