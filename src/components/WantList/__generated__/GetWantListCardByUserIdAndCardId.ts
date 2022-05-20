/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWantListCardByUserIdAndCardId
// ====================================================

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_details {
  __typename: "Detail";
  detailName: string;
}

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_cardImages {
  __typename: "CardImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string;
}

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
  isHof: boolean | null;
}

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  manufacturerId: string;
  year: string;
  variety: string;
  sport: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_cardSet_sport | null;
}

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card {
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
  details: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_details[];
  cardImages: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_cardImages[] | null;
  players: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_players[] | null;
  manufacturer: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_manufacturer;
  cardSet: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card_cardSet;
}

export interface GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId {
  __typename: "WantListCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  budgetHigh: number | null;
  budgetLow: number | null;
  willTradeFor: boolean | null;
  isHigher: boolean | null;
  willBuy: boolean | null;
  cardGradeId: string | null;
  comment: string | null;
  card: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId_card;
}

export interface GetWantListCardByUserIdAndCardId {
  getWantListCardByUserIdAndCardId: GetWantListCardByUserIdAndCardId_getWantListCardByUserIdAndCardId | null;
}

export interface GetWantListCardByUserIdAndCardIdVariables {
  userId: string;
  cardId: string;
}
