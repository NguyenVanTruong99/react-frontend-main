/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListCompsByPlayerId
// ====================================================

export interface ListCompsByPlayerId_listCompsByPlayerId {
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

export interface ListCompsByPlayerId {
  listCompsByPlayerId: ListCompsByPlayerId_listCompsByPlayerId[];
}

export interface ListCompsByPlayerIdVariables {
  offsetAttributes?: OffsetAttributes | null;
  playerId: string;
  startDate?: any | null;
}
