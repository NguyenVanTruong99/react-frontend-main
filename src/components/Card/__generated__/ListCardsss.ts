/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListCardsss
// ====================================================

export interface ListCardsss_listCards_cardImages {
  __typename: "CardImage";
  imageUrl: string;
}

export interface ListCardsss_listCards_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface ListCardsss_listCards_cardSet {
  __typename: "CardSet";
  manufacturerId: string;
  name: string;
  year: string;
  variety: string;
  sport: ListCardsss_listCards_cardSet_sport | null;
}

export interface ListCardsss_listCards_manufacturer {
  __typename: "Manufacturer";
  name: string;
}

export interface ListCardsss_listCards {
  __typename: "Card";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  cardImages: ListCardsss_listCards_cardImages[] | null;
  cardNumber: string | null;
  cardSet: ListCardsss_listCards_cardSet;
  cardSetId: string;
  frontUrl: string | null;
  fullName: string;
  hasImage: boolean | null;
  manufacturer: ListCardsss_listCards_manufacturer;
  name: string;
  totalGraded: number | null;
  totalSales: number | null;
}

export interface ListCardsss {
  /**
   * List all cards
   */
  listCards: ListCardsss_listCards[];
}

export interface ListCardsssVariables {
  cardIds?: string[] | null;
}
