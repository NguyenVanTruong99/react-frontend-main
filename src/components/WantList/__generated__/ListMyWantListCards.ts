/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListMyWantListCards
// ====================================================

export interface ListMyWantListCards_listMyWantListCards_card_details {
  __typename: "Detail";
  detailName: string;
}

export interface ListMyWantListCards_listMyWantListCards_card_cardImages {
  __typename: "CardImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string;
}

export interface ListMyWantListCards_listMyWantListCards_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
  isHof: boolean | null;
}

export interface ListMyWantListCards_listMyWantListCards_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface ListMyWantListCards_listMyWantListCards_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface ListMyWantListCards_listMyWantListCards_card_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  manufacturerId: string;
  year: string;
  variety: string;
  sport: ListMyWantListCards_listMyWantListCards_card_cardSet_sport | null;
}

export interface ListMyWantListCards_listMyWantListCards_card {
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
  details: ListMyWantListCards_listMyWantListCards_card_details[];
  cardImages: ListMyWantListCards_listMyWantListCards_card_cardImages[] | null;
  players: ListMyWantListCards_listMyWantListCards_card_players[] | null;
  manufacturer: ListMyWantListCards_listMyWantListCards_card_manufacturer;
  cardSet: ListMyWantListCards_listMyWantListCards_card_cardSet;
}

export interface ListMyWantListCards_listMyWantListCards {
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
  card: ListMyWantListCards_listMyWantListCards_card;
}

export interface ListMyWantListCards {
  /**
   * List want list cards for authed user
   */
  listMyWantListCards: ListMyWantListCards_listMyWantListCards[];
}

export interface ListMyWantListCardsVariables {
  offsetAttributes?: OffsetAttributes | null;
}
