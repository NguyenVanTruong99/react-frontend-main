/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, SortAttributes, CardFilterAttributes, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SearchUserCardsOther
// ====================================================

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade_grade_gradeVendor;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade_gradeVendor;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_cardSet {
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
  sport: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_cardSet_sport | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card {
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
  players: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_players[] | null;
  manufacturer: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_manufacturer;
  cardSet: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card_cardSet;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_user_approvedProfileImages[] | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results_items_userCard {
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
  userCardDetails: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_userCardDetails[] | null;
  displayGrade: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_displayGrade | null;
  boundGrade: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_boundGrade | null;
  cardGrade: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardGrade | null;
  userCardImages: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_userCardImages[] | null;
  card: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_card | null;
  cardId: string | null;
  cardSet: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: SearchUserCardsOther_searchUserCardsOther_results_items_userCard_user;
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

export interface SearchUserCardsOther_searchUserCardsOther_results_items {
  __typename: "SearchResultItem";
  id: string;
  type: string;
  userCard: SearchUserCardsOther_searchUserCardsOther_results_items_userCard | null;
}

export interface SearchUserCardsOther_searchUserCardsOther_results {
  __typename: "SearchResult";
  count: number;
  aggs: any[];
  items: SearchUserCardsOther_searchUserCardsOther_results_items[];
  type: string;
}

export interface SearchUserCardsOther_searchUserCardsOther {
  __typename: "SearchResultSet";
  results: SearchUserCardsOther_searchUserCardsOther_results[];
}

export interface SearchUserCardsOther {
  /**
   * return other users UserCards from a query string
   */
  searchUserCardsOther: SearchUserCardsOther_searchUserCardsOther;
}

export interface SearchUserCardsOtherVariables {
  offsetAttributes?: OffsetAttributes | null;
  sortAttributes?: SortAttributes | null;
  filterAttributes?: CardFilterAttributes | null;
  term: string;
}
