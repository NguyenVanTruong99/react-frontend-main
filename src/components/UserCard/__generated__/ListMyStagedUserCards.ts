/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes, GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListMyStagedUserCards
// ====================================================

export interface ListMyStagedUserCards_listMyStagedUserCards_userCardDetails {
  __typename: "UserCardDetail";
  detailName: string;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_displayGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_displayGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListMyStagedUserCards_listMyStagedUserCards_displayGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_boundGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_boundGrade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListMyStagedUserCards_listMyStagedUserCards_boundGrade_gradeVendor;
  grade: number;
  gradeLabel: string | null;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListMyStagedUserCards_listMyStagedUserCards_cardGrade_grade_gradeVendor;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: ListMyStagedUserCards_listMyStagedUserCards_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: ListMyStagedUserCards_listMyStagedUserCards_cardGrade_gradeVendor;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_card_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_card_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_card_cardSet {
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
  sport: ListMyStagedUserCards_listMyStagedUserCards_card_cardSet_sport | null;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_card {
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
  players: ListMyStagedUserCards_listMyStagedUserCards_card_players[] | null;
  manufacturer: ListMyStagedUserCards_listMyStagedUserCards_card_manufacturer;
  cardSet: ListMyStagedUserCards_listMyStagedUserCards_card_cardSet;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_player {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_sport {
  __typename: "Sport";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListMyStagedUserCards_listMyStagedUserCards_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  approvedProfileImages: ListMyStagedUserCards_listMyStagedUserCards_user_approvedProfileImages[] | null;
}

export interface ListMyStagedUserCards_listMyStagedUserCards {
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
  userCardDetails: ListMyStagedUserCards_listMyStagedUserCards_userCardDetails[] | null;
  displayGrade: ListMyStagedUserCards_listMyStagedUserCards_displayGrade | null;
  boundGrade: ListMyStagedUserCards_listMyStagedUserCards_boundGrade | null;
  cardGrade: ListMyStagedUserCards_listMyStagedUserCards_cardGrade | null;
  userCardImages: ListMyStagedUserCards_listMyStagedUserCards_userCardImages[] | null;
  card: ListMyStagedUserCards_listMyStagedUserCards_card | null;
  cardId: string | null;
  cardSet: ListMyStagedUserCards_listMyStagedUserCards_cardSet | null;
  cardSetId: string | null;
  checklistNumber: string | null;
  createdAt: any;
  hasImage: boolean;
  isOwned: boolean;
  manufacturerId: string | null;
  player: ListMyStagedUserCards_listMyStagedUserCards_player | null;
  playerId: string | null;
  soldAt: any | null;
  sport: ListMyStagedUserCards_listMyStagedUserCards_sport | null;
  sportId: string | null;
  updatedAt: any;
  user: ListMyStagedUserCards_listMyStagedUserCards_user;
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

export interface ListMyStagedUserCards {
  /**
   * List user cards for the authenticated user that have not been added to a collection
   */
  listMyStagedUserCards: ListMyStagedUserCards_listMyStagedUserCards[];
}

export interface ListMyStagedUserCardsVariables {
  offsetAttributes?: OffsetAttributes | null;
}
