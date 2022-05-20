/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCardByCertNumberAndService
// ====================================================

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade_grade_gradeVendor;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade_gradeVendor;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_cardSet {
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
  sport: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_cardSet_sport | null;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card {
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
  players: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_players[] | null;
  manufacturer: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_manufacturer;
  cardSet: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card_cardSet;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_user_approvedProfileImages[] | null;
}

export interface CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService {
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
  userCardDetails: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_userCardDetails[] | null;
  displayGrade: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_displayGrade | null;
  boundGrade: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_boundGrade | null;
  cardGrade: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardGrade | null;
  userCardImages: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_userCardImages[] | null;
  card: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_card | null;
  cardId: string | null;
  cardSet: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService_user;
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

export interface CreateUserCardByCertNumberAndService {
  /**
   * Upload an image and run it through the card recognizer to extra info
   */
  createUserCardByCertNumberAndService: CreateUserCardByCertNumberAndService_createUserCardByCertNumberAndService;
}

export interface CreateUserCardByCertNumberAndServiceVariables {
  certNumber: string;
  service: string;
}
