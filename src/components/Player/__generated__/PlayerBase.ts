/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PlayerBase
// ====================================================

export interface PlayerBase_position_sport {
  __typename: "Sport";
  name: string;
}

export interface PlayerBase_position {
  __typename: "Position";
  name: string | null;
  sport: PlayerBase_position_sport;
}

export interface PlayerBase_sport {
  __typename: "Sport";
  name: string;
}

export interface PlayerBase_team {
  __typename: "Team";
  nickname: string | null;
  location: string | null;
}

export interface PlayerBase {
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
  position: PlayerBase_position | null;
  sport: PlayerBase_sport | null;
  team: PlayerBase_team | null;
}
