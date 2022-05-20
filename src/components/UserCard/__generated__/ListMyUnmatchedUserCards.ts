/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListMyUnmatchedUserCards
// ====================================================

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade_grade_gradeVendor;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade_gradeVendor;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_cardSet {
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
  sport: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_cardSet_sport | null;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card {
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
  players: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_players[] | null;
  manufacturer: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_manufacturer;
  cardSet: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card_cardSet;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_user_approvedProfileImages[] | null;
}

export interface ListMyUnmatchedUserCards_listMyUnmatchedUserCards {
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
  userCardDetails: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_userCardDetails[] | null;
  displayGrade: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_displayGrade | null;
  boundGrade: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_boundGrade | null;
  cardGrade: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardGrade | null;
  userCardImages: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_userCardImages[] | null;
  card: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_card | null;
  cardId: string | null;
  cardSet: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: ListMyUnmatchedUserCards_listMyUnmatchedUserCards_user;
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

export interface ListMyUnmatchedUserCards {
  /**
   * List user cards for the authenticated user that have not been matched to a master card
   */
  listMyUnmatchedUserCards: ListMyUnmatchedUserCards_listMyUnmatchedUserCards[];
}

export interface ListMyUnmatchedUserCardsVariables {
  offsetAttributes?: OffsetAttributes | null;
}
