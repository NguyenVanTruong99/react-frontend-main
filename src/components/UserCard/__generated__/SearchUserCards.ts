/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, SortAttributes, CardFilterAttributes, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SearchUserCards
// ====================================================

export interface SearchUserCards_searchUserCards_results_items_userCard_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: SearchUserCards_searchUserCards_results_items_userCard_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: SearchUserCards_searchUserCards_results_items_userCard_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: SearchUserCards_searchUserCards_results_items_userCard_cardGrade_grade_gradeVendor;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: SearchUserCards_searchUserCards_results_items_userCard_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: SearchUserCards_searchUserCards_results_items_userCard_cardGrade_gradeVendor;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_card_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  fullName: string;
  manufacturerId: string;
  year: string;
  variety: string;
  sport: SearchUserCards_searchUserCards_results_items_userCard_card_cardSet_sport | null;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_card {
  __typename: "Card";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  hasImage: boolean | null;
  noxxUuid: string;
  cardNumber: string | null;
  frontUrl: string | null;
  fullName: string;
  players: SearchUserCards_searchUserCards_results_items_userCard_card_players[] | null;
  manufacturer: SearchUserCards_searchUserCards_results_items_userCard_card_manufacturer;
  cardSet: SearchUserCards_searchUserCards_results_items_userCard_card_cardSet;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface SearchUserCards_searchUserCards_results_items_userCard_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: SearchUserCards_searchUserCards_results_items_userCard_user_approvedProfileImages[] | null;
}

export interface SearchUserCards_searchUserCards_results_items_userCard {
  __typename: "UserCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  acquiredAt: any | null;
  editionNumber: number | null;
  editionSize: number | null;
  acquisitionSource: string | null;
  cardStatus: string | null;
  purchasePrice: number | null;
  storageLocation: string | null;
  gradingCost: number | null;
  isPublic: boolean;
  isStaged: boolean;
  isCertified: boolean;
  gradeId: string | null;
  cardGradeId: string | null;
  showcaseCount: number | null;
  userCardDetails: SearchUserCards_searchUserCards_results_items_userCard_userCardDetails[] | null;
  displayGrade: SearchUserCards_searchUserCards_results_items_userCard_displayGrade | null;
  boundGrade: SearchUserCards_searchUserCards_results_items_userCard_boundGrade | null;
  cardGrade: SearchUserCards_searchUserCards_results_items_userCard_cardGrade | null;
  userCardImages: SearchUserCards_searchUserCards_results_items_userCard_userCardImages[] | null;
  card: SearchUserCards_searchUserCards_results_items_userCard_card | null;
  cardId: string | null;
  cardSet: SearchUserCards_searchUserCards_results_items_userCard_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: SearchUserCards_searchUserCards_results_items_userCard_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: SearchUserCards_searchUserCards_results_items_userCard_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: SearchUserCards_searchUserCards_results_items_userCard_user;
  userId: string;
  year: string | null;
  manufacturerName: string | null;
  cardSetName: string | null;
  playerName: string | null;
  sportName: string | null;
  certNumber: string | null;
  gradeVendorName: string | null;
  grade: number | null;
  cardNumber: string | null;
}

export interface SearchUserCards_searchUserCards_results_items {
  __typename: "SearchResultItem";
  id: string;
  type: string;
  userCard: SearchUserCards_searchUserCards_results_items_userCard | null;
}

export interface SearchUserCards_searchUserCards_results {
  __typename: "SearchResult";
  count: number;
  aggs: any[];
  items: SearchUserCards_searchUserCards_results_items[];
  type: string;
}

export interface SearchUserCards_searchUserCards {
  __typename: "SearchResultSet";
  results: SearchUserCards_searchUserCards_results[];
}

export interface SearchUserCards {
  /**
   * return user cards from a query string
   */
  searchUserCards: SearchUserCards_searchUserCards;
}

export interface SearchUserCardsVariables {
  offsetAttributes?: OffsetAttributes | null;
  sortAttributes?: SortAttributes | null;
  filterAttributes?: CardFilterAttributes | null;
  term: string;
}
