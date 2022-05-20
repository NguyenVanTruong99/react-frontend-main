/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserCardInput, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserCard
// ====================================================

export interface UpdateUserCard_updateUserCard_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface UpdateUserCard_updateUserCard_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UpdateUserCard_updateUserCard_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: UpdateUserCard_updateUserCard_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface UpdateUserCard_updateUserCard_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UpdateUserCard_updateUserCard_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: UpdateUserCard_updateUserCard_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface UpdateUserCard_updateUserCard_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UpdateUserCard_updateUserCard_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: UpdateUserCard_updateUserCard_cardGrade_grade_gradeVendor;
}

export interface UpdateUserCard_updateUserCard_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UpdateUserCard_updateUserCard_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: UpdateUserCard_updateUserCard_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: UpdateUserCard_updateUserCard_cardGrade_gradeVendor;
}

export interface UpdateUserCard_updateUserCard_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface UpdateUserCard_updateUserCard_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface UpdateUserCard_updateUserCard_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface UpdateUserCard_updateUserCard_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface UpdateUserCard_updateUserCard_card_cardSet {
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
  sport: UpdateUserCard_updateUserCard_card_cardSet_sport | null;
}

export interface UpdateUserCard_updateUserCard_card {
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
  players: UpdateUserCard_updateUserCard_card_players[] | null;
  manufacturer: UpdateUserCard_updateUserCard_card_manufacturer;
  cardSet: UpdateUserCard_updateUserCard_card_cardSet;
}

export interface UpdateUserCard_updateUserCard_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UpdateUserCard_updateUserCard_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UpdateUserCard_updateUserCard_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UpdateUserCard_updateUserCard_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UpdateUserCard_updateUserCard_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: UpdateUserCard_updateUserCard_user_approvedProfileImages[] | null;
}

export interface UpdateUserCard_updateUserCard {
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
  userCardDetails: UpdateUserCard_updateUserCard_userCardDetails[] | null;
  displayGrade: UpdateUserCard_updateUserCard_displayGrade | null;
  boundGrade: UpdateUserCard_updateUserCard_boundGrade | null;
  cardGrade: UpdateUserCard_updateUserCard_cardGrade | null;
  userCardImages: UpdateUserCard_updateUserCard_userCardImages[] | null;
  card: UpdateUserCard_updateUserCard_card | null;
  cardId: string | null;
  cardSet: UpdateUserCard_updateUserCard_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: UpdateUserCard_updateUserCard_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: UpdateUserCard_updateUserCard_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: UpdateUserCard_updateUserCard_user;
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

export interface UpdateUserCard {
  updateUserCard: UpdateUserCard_updateUserCard | null;
}

export interface UpdateUserCardVariables {
  input: UpdateUserCardInput;
}
