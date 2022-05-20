/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCardByImageUpload
// ====================================================

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCardByImageUpload_createUserCardByImageUpload_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCardByImageUpload_createUserCardByImageUpload_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade_grade_gradeVendor;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade_gradeVendor;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_card_cardSet {
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
  sport: CreateUserCardByImageUpload_createUserCardByImageUpload_card_cardSet_sport | null;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_card {
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
  players: CreateUserCardByImageUpload_createUserCardByImageUpload_card_players[] | null;
  manufacturer: CreateUserCardByImageUpload_createUserCardByImageUpload_card_manufacturer;
  cardSet: CreateUserCardByImageUpload_createUserCardByImageUpload_card_cardSet;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: CreateUserCardByImageUpload_createUserCardByImageUpload_user_approvedProfileImages[] | null;
}

export interface CreateUserCardByImageUpload_createUserCardByImageUpload {
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
  userCardDetails: CreateUserCardByImageUpload_createUserCardByImageUpload_userCardDetails[] | null;
  displayGrade: CreateUserCardByImageUpload_createUserCardByImageUpload_displayGrade | null;
  boundGrade: CreateUserCardByImageUpload_createUserCardByImageUpload_boundGrade | null;
  cardGrade: CreateUserCardByImageUpload_createUserCardByImageUpload_cardGrade | null;
  userCardImages: CreateUserCardByImageUpload_createUserCardByImageUpload_userCardImages[] | null;
  card: CreateUserCardByImageUpload_createUserCardByImageUpload_card | null;
  cardId: string | null;
  cardSet: CreateUserCardByImageUpload_createUserCardByImageUpload_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: CreateUserCardByImageUpload_createUserCardByImageUpload_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: CreateUserCardByImageUpload_createUserCardByImageUpload_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: CreateUserCardByImageUpload_createUserCardByImageUpload_user;
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

export interface CreateUserCardByImageUpload {
  /**
   * Upload an image and run it through the card recognizer to extra info
   */
  createUserCardByImageUpload: CreateUserCardByImageUpload_createUserCardByImageUpload;
}

export interface CreateUserCardByImageUploadVariables {
  image: any;
}
