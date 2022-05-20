/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListPlayersById
// ====================================================

export interface ListPlayersById_listPlayersById_position_sport {
  __typename: "Sport";
  name: string;
}

export interface ListPlayersById_listPlayersById_position {
  __typename: "Position";
  name: string | null;
  sport: ListPlayersById_listPlayersById_position_sport;
}

export interface ListPlayersById_listPlayersById_sport {
  __typename: "Sport";
  name: string;
}

export interface ListPlayersById_listPlayersById_team {
  __typename: "Team";
  nickname: string | null;
  location: string | null;
}

export interface ListPlayersById_listPlayersById {
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
  position: ListPlayersById_listPlayersById_position | null;
  sport: ListPlayersById_listPlayersById_sport | null;
  team: ListPlayersById_listPlayersById_team | null;
}

export interface ListPlayersById {
  /**
   * Get all players by ids
   */
  listPlayersById: ListPlayersById_listPlayersById[];
}

export interface ListPlayersByIdVariables {
  ids: string[];
}
