/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetCard
// ====================================================

export interface GetCard_getCard_details {
  __typename: "Detail";
  detailName: string;
}

export interface GetCard_getCard_cardImages {
  __typename: "CardImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string;
}

export interface GetCard_getCard_players {
  __typename: "Player";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  fullName: string | null;
  isHof: boolean | null;
}

export interface GetCard_getCard_manufacturer {
  __typename: "Manufacturer";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
}

export interface GetCard_getCard_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface GetCard_getCard_cardSet {
  __typename: "CardSet";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  manufacturerId: string;
  year: string;
  variety: string;
  sport: GetCard_getCard_cardSet_sport | null;
}

export interface GetCard_getCard_cardGrades_gradeVendor {
  __typename: "GradeVendor";
  name: GradeVendorName;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetCard_getCard_cardGrades {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: GetCard_getCard_cardGrades_gradeVendor;
}

export interface GetCard_getCard {
  __typename: "Card";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  hasImage: boolean | null;
  noxxUuid: string;
  cardNumber: string | null;
  totalGraded: number | null;
  totalSales: number | null;
  frontUrl: string | null;
  details: GetCard_getCard_details[];
  cardImages: GetCard_getCard_cardImages[] | null;
  players: GetCard_getCard_players[] | null;
  manufacturer: GetCard_getCard_manufacturer;
  cardSet: GetCard_getCard_cardSet;
  cardGrades: GetCard_getCard_cardGrades[];
}

export interface GetCard {
  /**
   * Find a card by ID
   */
  getCard: GetCard_getCard;
}

export interface GetCardVariables {
  id: string;
}
