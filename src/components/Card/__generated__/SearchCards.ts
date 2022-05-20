/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, SortAttributes, CardFilterAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SearchCards
// ====================================================

export interface SearchCards_searchCards_results_items_card_details {
  __typename: "Detail";
  detailName: string;
}

export interface SearchCards_searchCards_results_items_card_cardImages {
  __typename: "CardImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string;
}

export interface SearchCards_searchCards_results_items_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
  isHof: boolean | null;
}

export interface SearchCards_searchCards_results_items_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface SearchCards_searchCards_results_items_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface SearchCards_searchCards_results_items_card_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  manufacturerId: string;
  year: string;
  variety: string;
  sport: SearchCards_searchCards_results_items_card_cardSet_sport | null;
}

export interface SearchCards_searchCards_results_items_card {
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
  details: SearchCards_searchCards_results_items_card_details[];
  cardImages: SearchCards_searchCards_results_items_card_cardImages[] | null;
  players: SearchCards_searchCards_results_items_card_players[] | null;
  manufacturer: SearchCards_searchCards_results_items_card_manufacturer;
  cardSet: SearchCards_searchCards_results_items_card_cardSet;
}

export interface SearchCards_searchCards_results_items {
  __typename: "SearchResultItem";
  id: string;
  type: string;
  card: SearchCards_searchCards_results_items_card | null;
}

export interface SearchCards_searchCards_results {
  __typename: "SearchResult";
  count: number;
  aggs: any[];
  items: SearchCards_searchCards_results_items[];
  type: string;
}

export interface SearchCards_searchCards {
  __typename: "SearchResultSet";
  results: SearchCards_searchCards_results[];
}

export interface SearchCards {
  /**
   * return players from a query string
   */
  searchCards: SearchCards_searchCards;
}

export interface SearchCardsVariables {
  offsetAttributes?: OffsetAttributes | null;
  sortAttributes?: SortAttributes | null;
  filterAttributes?: CardFilterAttributes | null;
  term: string;
}
