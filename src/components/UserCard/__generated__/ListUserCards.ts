/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListUserCards
// ====================================================

export interface ListUserCards_listUserCards_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListUserCards_listUserCards_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListUserCards_listUserCards_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListUserCards_listUserCards_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface ListUserCards_listUserCards_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListUserCards_listUserCards_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListUserCards_listUserCards_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface ListUserCards_listUserCards_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListUserCards_listUserCards_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListUserCards_listUserCards_cardGrade_grade_gradeVendor;
}

export interface ListUserCards_listUserCards_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListUserCards_listUserCards_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: ListUserCards_listUserCards_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: ListUserCards_listUserCards_cardGrade_gradeVendor;
}

export interface ListUserCards_listUserCards_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface ListUserCards_listUserCards_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface ListUserCards_listUserCards_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface ListUserCards_listUserCards_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface ListUserCards_listUserCards_card_cardSet {
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
  sport: ListUserCards_listUserCards_card_cardSet_sport | null;
}

export interface ListUserCards_listUserCards_card {
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
  players: ListUserCards_listUserCards_card_players[] | null;
  manufacturer: ListUserCards_listUserCards_card_manufacturer;
  cardSet: ListUserCards_listUserCards_card_cardSet;
}

export interface ListUserCards_listUserCards_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListUserCards_listUserCards_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListUserCards_listUserCards_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListUserCards_listUserCards_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUserCards_listUserCards_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: ListUserCards_listUserCards_user_approvedProfileImages[] | null;
}

export interface ListUserCards_listUserCards {
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
  userCardDetails: ListUserCards_listUserCards_userCardDetails[] | null;
  displayGrade: ListUserCards_listUserCards_displayGrade | null;
  boundGrade: ListUserCards_listUserCards_boundGrade | null;
  cardGrade: ListUserCards_listUserCards_cardGrade | null;
  userCardImages: ListUserCards_listUserCards_userCardImages[] | null;
  card: ListUserCards_listUserCards_card | null;
  cardId: string | null;
  cardSet: ListUserCards_listUserCards_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: ListUserCards_listUserCards_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: ListUserCards_listUserCards_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: ListUserCards_listUserCards_user;
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

export interface ListUserCards {
  /**
   * List user cards
   */
  listUserCards: ListUserCards_listUserCards[];
}

export interface ListUserCardsVariables {
  offsetAttributes?: OffsetAttributes | null;
  userCardIds?: string[] | null;
}
