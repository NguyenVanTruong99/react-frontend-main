/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetUserCard
// ====================================================

export interface GetUserCard_getUserCard_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetUserCard_getUserCard_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface GetUserCard_getUserCard_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: GetUserCard_getUserCard_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface GetUserCard_getUserCard_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface GetUserCard_getUserCard_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: GetUserCard_getUserCard_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface GetUserCard_getUserCard_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface GetUserCard_getUserCard_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: GetUserCard_getUserCard_cardGrade_grade_gradeVendor;
}

export interface GetUserCard_getUserCard_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface GetUserCard_getUserCard_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: GetUserCard_getUserCard_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: GetUserCard_getUserCard_cardGrade_gradeVendor;
}

export interface GetUserCard_getUserCard_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface GetUserCard_getUserCard_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface GetUserCard_getUserCard_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface GetUserCard_getUserCard_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface GetUserCard_getUserCard_card_cardSet {
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
  sport: GetUserCard_getUserCard_card_cardSet_sport | null;
}

export interface GetUserCard_getUserCard_card {
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
  players: GetUserCard_getUserCard_card_players[] | null;
  manufacturer: GetUserCard_getUserCard_card_manufacturer;
  cardSet: GetUserCard_getUserCard_card_cardSet;
}

export interface GetUserCard_getUserCard_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetUserCard_getUserCard_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetUserCard_getUserCard_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetUserCard_getUserCard_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface GetUserCard_getUserCard_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: GetUserCard_getUserCard_user_approvedProfileImages[] | null;
}

export interface GetUserCard_getUserCard {
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
  userCardDetails: GetUserCard_getUserCard_userCardDetails[] | null;
  displayGrade: GetUserCard_getUserCard_displayGrade | null;
  boundGrade: GetUserCard_getUserCard_boundGrade | null;
  cardGrade: GetUserCard_getUserCard_cardGrade | null;
  userCardImages: GetUserCard_getUserCard_userCardImages[] | null;
  card: GetUserCard_getUserCard_card | null;
  cardId: string | null;
  cardSet: GetUserCard_getUserCard_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: GetUserCard_getUserCard_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: GetUserCard_getUserCard_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: GetUserCard_getUserCard_user;
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

export interface GetUserCard {
  /**
   * Find a user card by ID
   */
  getUserCard: GetUserCard_getUserCard;
}

export interface GetUserCardVariables {
  id: string;
}
