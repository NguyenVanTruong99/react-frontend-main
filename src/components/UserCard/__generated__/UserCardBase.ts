/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: UserCardBase
// ====================================================

export interface UserCardBase_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface UserCardBase_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UserCardBase_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: UserCardBase_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface UserCardBase_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UserCardBase_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: UserCardBase_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface UserCardBase_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UserCardBase_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: UserCardBase_cardGrade_grade_gradeVendor;
}

export interface UserCardBase_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface UserCardBase_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: UserCardBase_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: UserCardBase_cardGrade_gradeVendor;
}

export interface UserCardBase_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface UserCardBase_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface UserCardBase_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface UserCardBase_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface UserCardBase_card_cardSet {
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
  sport: UserCardBase_card_cardSet_sport | null;
}

export interface UserCardBase_card {
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
  players: UserCardBase_card_players[] | null;
  manufacturer: UserCardBase_card_manufacturer;
  cardSet: UserCardBase_card_cardSet;
}

export interface UserCardBase_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UserCardBase_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UserCardBase_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UserCardBase_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UserCardBase_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: UserCardBase_user_approvedProfileImages[] | null;
}

export interface UserCardBase {
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
  userCardDetails: UserCardBase_userCardDetails[] | null;
  displayGrade: UserCardBase_displayGrade | null;
  boundGrade: UserCardBase_boundGrade | null;
  cardGrade: UserCardBase_cardGrade | null;
  userCardImages: UserCardBase_userCardImages[] | null;
  card: UserCardBase_card | null;
  cardId: string | null;
  cardSet: UserCardBase_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: UserCardBase_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: UserCardBase_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: UserCardBase_user;
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
