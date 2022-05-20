/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, SortAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SearchPlayers
// ====================================================

export interface SearchPlayers_searchPlayers_results_items_player_position_sport {
  __typename: "Sport";
  name: string;
}

export interface SearchPlayers_searchPlayers_results_items_player_position {
  __typename: "Position";
  name: string | null;
  sport: SearchPlayers_searchPlayers_results_items_player_position_sport;
}

export interface SearchPlayers_searchPlayers_results_items_player_sport {
  __typename: "Sport";
  name: string;
}

export interface SearchPlayers_searchPlayers_results_items_player_team {
  __typename: "Team";
  nickname: string | null;
  location: string | null;
}

export interface SearchPlayers_searchPlayers_results_items_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
  headshotUrl: string | null;
  jerseyNumber: string | null;
  careerStats: string | null;
  notableCardIds: string | null;
  status: string | null;
  height: string | null;
  weight: string | null;
  birthDate: any | null;
  birthPlace: string | null;
  draftPick: string | null;
  draftRound: string | null;
  draftYear: string | null;
  experience: string | null;
  rookieYear: string | null;
  position: SearchPlayers_searchPlayers_results_items_player_position | null;
  sport: SearchPlayers_searchPlayers_results_items_player_sport | null;
  team: SearchPlayers_searchPlayers_results_items_player_team | null;
}

export interface SearchPlayers_searchPlayers_results_items {
  __typename: "SearchResultItem";
  id: string;
  type: string;
  player: SearchPlayers_searchPlayers_results_items_player | null;
}

export interface SearchPlayers_searchPlayers_results {
  __typename: "SearchResult";
  count: number;
  items: SearchPlayers_searchPlayers_results_items[];
  type: string;
}

export interface SearchPlayers_searchPlayers {
  __typename: "SearchResultSet";
  results: SearchPlayers_searchPlayers_results[];
}

export interface SearchPlayers {
  /**
   * return players from a query string
   */
  searchPlayers: SearchPlayers_searchPlayers;
}

export interface SearchPlayersVariables {
  term: string;
  offsetAttributes?: OffsetAttributes | null;
  sortAttributes?: SortAttributes | null;
}
