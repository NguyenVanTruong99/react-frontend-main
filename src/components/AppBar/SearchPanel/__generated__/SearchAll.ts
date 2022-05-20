/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, GradeVendorName } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SearchAll
// ====================================================

export interface SearchAll_searchAll_results_items_card_cardSet {
  __typename: "CardSet";
  name: string;
  variety: string;
  year: string;
}

export interface SearchAll_searchAll_results_items_card {
  __typename: "Card";
  name: string;
  cardNumber: string | null;
  frontUrl: string | null;
  cardSet: SearchAll_searchAll_results_items_card_cardSet;
}

export interface SearchAll_searchAll_results_items_player_team {
  __typename: "Team";
  location: string | null;
  nickname: string | null;
}

export interface SearchAll_searchAll_results_items_player_sport {
  __typename: "Sport";
  name: string;
}

export interface SearchAll_searchAll_results_items_player {
  __typename: "Player";
  headshotUrl: string | null;
  fullName: string | null;
  status: string | null;
  team: SearchAll_searchAll_results_items_player_team | null;
  sport: SearchAll_searchAll_results_items_player_sport | null;
}

export interface SearchAll_searchAll_results_items_user_profile {
  __typename: "UserProfile";
  location: string | null;
}

export interface SearchAll_searchAll_results_items_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface SearchAll_searchAll_results_items_user {
  __typename: "User";
  username: string | null;
  profile: SearchAll_searchAll_results_items_user_profile | null;
  approvedProfileImages: SearchAll_searchAll_results_items_user_approvedProfileImages[] | null;
}

export interface SearchAll_searchAll_results_items_userCard_user_profileImages {
  __typename: "UserProfileImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string | null;
  isApproved: boolean | null;
}

export interface SearchAll_searchAll_results_items_userCard_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface SearchAll_searchAll_results_items_userCard_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  profileImages: SearchAll_searchAll_results_items_userCard_user_profileImages[] | null;
  approvedProfileImages: SearchAll_searchAll_results_items_userCard_user_approvedProfileImages[] | null;
}

export interface SearchAll_searchAll_results_items_userCard_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchAll_searchAll_results_items_userCard_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: SearchAll_searchAll_results_items_userCard_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface SearchAll_searchAll_results_items_userCard_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface SearchAll_searchAll_results_items_userCard_card_cardSet {
  __typename: "CardSet";
  name: string;
  variety: string;
  year: string;
}

export interface SearchAll_searchAll_results_items_userCard_card {
  __typename: "Card";
  name: string;
  cardNumber: string | null;
  frontUrl: string | null;
  cardSet: SearchAll_searchAll_results_items_userCard_card_cardSet;
}

export interface SearchAll_searchAll_results_items_userCard {
  __typename: "UserCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  user: SearchAll_searchAll_results_items_userCard_user;
  displayGrade: SearchAll_searchAll_results_items_userCard_displayGrade | null;
  userCardImages: SearchAll_searchAll_results_items_userCard_userCardImages[] | null;
  card: SearchAll_searchAll_results_items_userCard_card | null;
}

export interface SearchAll_searchAll_results_items {
  __typename: "SearchResultItem";
  id: string;
  type: string;
  highlight: string | null;
  card: SearchAll_searchAll_results_items_card | null;
  player: SearchAll_searchAll_results_items_player | null;
  user: SearchAll_searchAll_results_items_user | null;
  userCard: SearchAll_searchAll_results_items_userCard | null;
}

export interface SearchAll_searchAll_results {
  __typename: "SearchResult";
  count: number;
  items: SearchAll_searchAll_results_items[];
  type: string;
}

export interface SearchAll_searchAll {
  __typename: "SearchResultSet";
  results: SearchAll_searchAll_results[];
}

export interface SearchAll {
  /**
   * List search results across players, users, cards, and user collections
   */
  searchAll: SearchAll_searchAll;
}

export interface SearchAllVariables {
  offsetAttributes?: OffsetAttributes | null;
  term: string;
}
