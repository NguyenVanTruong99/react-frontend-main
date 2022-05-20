/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateWantListCardInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateWantListCard
// ====================================================

export interface updateWantListCard_updateWantListCard {
  __typename: "WantListCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  budgetHigh: number | null;
  budgetLow: number | null;
  willTradeFor: boolean | null;
  willBuy: boolean | null;
  cardGradeId: string | null;
  isHigher: boolean | null;
}

export interface updateWantListCard {
  updateWantListCard: updateWantListCard_updateWantListCard | null;
}

export interface updateWantListCardVariables {
  input: UpdateWantListCardInput;
}
