/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlayer
// ====================================================

export interface GetPlayer_getPlayer_position_sport {
  __typename: "Sport";
  name: string;
}

export interface GetPlayer_getPlayer_position {
  __typename: "Position";
  name: string | null;
  sport: GetPlayer_getPlayer_position_sport;
}

export interface GetPlayer_getPlayer_sport {
  __typename: "Sport";
  name: string;
}

export interface GetPlayer_getPlayer_team {
  __typename: "Team";
  nickname: string | null;
  location: string | null;
}

export interface GetPlayer_getPlayer {
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
  position: GetPlayer_getPlayer_position | null;
  sport: GetPlayer_getPlayer_sport | null;
  team: GetPlayer_getPlayer_team | null;
}

export interface GetPlayer {
  /**
   * Get players by id
   */
  getPlayer: GetPlayer_getPlayer;
}

export interface GetPlayerVariables {
  id: string;
}
