/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CardBase
// ====================================================

export interface CardBase_details {
  __typename: "Detail";
  detailName: string;
}

export interface CardBase_cardImages {
  __typename: "CardImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string;
}

export interface CardBase_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
  isHof: boolean | null;
}

export interface CardBase_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface CardBase_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface CardBase_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  manufacturerId: string;
  year: string;
  variety: string;
  sport: CardBase_cardSet_sport | null;
}

export interface CardBase {
  __typename: "Card";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  hasImage: boolean | null;
  noxxUuid: string;
  cardNumber: string | null;
  totalGraded: number | null;
  totalSales: number | null;
  frontUrl: string | null;
  details: CardBase_details[];
  cardImages: CardBase_cardImages[] | null;
  players: CardBase_players[] | null;
  manufacturer: CardBase_manufacturer;
  cardSet: CardBase_cardSet;
}
