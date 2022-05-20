/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DailyPerformersPlayerFragment
// ====================================================

export interface DailyPerformersPlayerFragment_team {
  __typename: "Team";
  nickname: string | null;
}

export interface DailyPerformersPlayerFragment_position_sport {
  __typename: "Sport";
  name: string;
}

export interface DailyPerformersPlayerFragment_position {
  __typename: "Position";
  name: string | null;
  sport: DailyPerformersPlayerFragment_position_sport;
}

export interface DailyPerformersPlayerFragment {
  __typename: "Player";
  headshotUrl: string | null;
  fullName: string | null;
  team: DailyPerformersPlayerFragment_team | null;
  position: DailyPerformersPlayerFragment_position | null;
}
