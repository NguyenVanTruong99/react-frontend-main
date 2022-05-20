/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserCardInput, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCard
// ====================================================

export interface CreateUserCard_createUserCard_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface CreateUserCard_createUserCard_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCard_createUserCard_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCard_createUserCard_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface CreateUserCard_createUserCard_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCard_createUserCard_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCard_createUserCard_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface CreateUserCard_createUserCard_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCard_createUserCard_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCard_createUserCard_cardGrade_grade_gradeVendor;
}

export interface CreateUserCard_createUserCard_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCard_createUserCard_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: CreateUserCard_createUserCard_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: CreateUserCard_createUserCard_cardGrade_gradeVendor;
}

export interface CreateUserCard_createUserCard_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface CreateUserCard_createUserCard_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface CreateUserCard_createUserCard_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface CreateUserCard_createUserCard_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface CreateUserCard_createUserCard_card_cardSet {
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
  sport: CreateUserCard_createUserCard_card_cardSet_sport | null;
}

export interface CreateUserCard_createUserCard_card {
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
  players: CreateUserCard_createUserCard_card_players[] | null;
  manufacturer: CreateUserCard_createUserCard_card_manufacturer;
  cardSet: CreateUserCard_createUserCard_card_cardSet;
}

export interface CreateUserCard_createUserCard_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCard_createUserCard_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCard_createUserCard_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCard_createUserCard_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface CreateUserCard_createUserCard_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: CreateUserCard_createUserCard_user_approvedProfileImages[] | null;
}

export interface CreateUserCard_createUserCard {
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
  userCardDetails: CreateUserCard_createUserCard_userCardDetails[] | null;
  displayGrade: CreateUserCard_createUserCard_displayGrade | null;
  boundGrade: CreateUserCard_createUserCard_boundGrade | null;
  cardGrade: CreateUserCard_createUserCard_cardGrade | null;
  userCardImages: CreateUserCard_createUserCard_userCardImages[] | null;
  card: CreateUserCard_createUserCard_card | null;
  cardId: string | null;
  cardSet: CreateUserCard_createUserCard_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: CreateUserCard_createUserCard_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: CreateUserCard_createUserCard_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: CreateUserCard_createUserCard_user;
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

export interface CreateUserCard {
  createUserCard: CreateUserCard_createUserCard | null;
}

export interface CreateUserCardVariables {
  input: CreateUserCardInput;
}
