/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListCardsForFreeFormEntry
// ====================================================

export interface ListCardsForFreeFormEntry_listCardsForFreeFormEntry_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface ListCardsForFreeFormEntry_listCardsForFreeFormEntry_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  manufacturerId: string;
  year: string;
}

export interface ListCardsForFreeFormEntry_listCardsForFreeFormEntry {
  __typename: "Card";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  hasImage: boolean | null;
  manufacturer: ListCardsForFreeFormEntry_listCardsForFreeFormEntry_manufacturer;
  cardSet: ListCardsForFreeFormEntry_listCardsForFreeFormEntry_cardSet;
}

export interface ListCardsForFreeFormEntry {
  /**
   * List all cards that match progressively narrowing criteria
   */
  listCardsForFreeFormEntry: ListCardsForFreeFormEntry_listCardsForFreeFormEntry[];
}

export interface ListCardsForFreeFormEntryVariables {
  cardNumber?: string | null;
  cardSetId?: string | null;
  manufacturerId?: string | null;
  offsetAttributes?: OffsetAttributes | null;
  playerIds: string[];
  year: string;
}
