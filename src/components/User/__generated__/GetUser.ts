/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_getUser_followers {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  followingId: string;
  userId: string;
}

export interface GetUser_getUser_cardGrades_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface GetUser_getUser_cardGrades_grade {
  __typename: "Grade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  grade: number;
  gradeLabel: string | null;
  gradeVendorId: string;
  gradeDisplay: string | null;
  gradeVendor: GetUser_getUser_cardGrades_grade_gradeVendor;
}

export interface GetUser_getUser_cardGrades_gradeVendor {
  __typename: "GradeVendor";
  name: GradeVendorName;
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface GetUser_getUser_cardGrades_userCard {
  __typename: "UserCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  purchasePrice: number | null;
}

export interface GetUser_getUser_cardGrades_card_cardSet_sport {
  __typename: "Sport";
  name: string;
}

export interface GetUser_getUser_cardGrades_card_cardSet {
  __typename: "CardSet";
  name: string;
  year: string;
  sport: GetUser_getUser_cardGrades_card_cardSet_sport | null;
}

export interface GetUser_getUser_cardGrades_card {
  __typename: "Card";
  name: string;
  cardSet: GetUser_getUser_cardGrades_card_cardSet;
}

export interface GetUser_getUser_cardGrades {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any;
  updatedAt: any;
  gradeId: string;
  gradeVendorId: string;
  cardId: string;
  gradePop: number;
  startValue: number | null;
  currentValue: number | null;
  lastSold: number | null;
  salesCount: number | null;
  grade: GetUser_getUser_cardGrades_grade;
  gradeVendor: GetUser_getUser_cardGrades_gradeVendor;
  userCard: GetUser_getUser_cardGrades_userCard | null;
  card: GetUser_getUser_cardGrades_card;
}

export interface GetUser_getUser_profile {
  __typename: "UserProfile";
  address1: string | null;
  address2: string | null;
  bio: string | null;
  city: string | null;
  clubhouseUser: string | null;
  country: string | null;
  /**
   * The date and time that the resource was created.
   */
  createdAt: any;
  firstName: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  instagramUser: string | null;
  lastName: string | null;
  myslabsUser: string | null;
  location: string | null;
  phoneNumber: string | null;
  snapchatUser: string | null;
  starstockUser: string | null;
  state: string | null;
  tiktokUser: string | null;
  twitterUser: string | null;
  /**
   * The date and time that the resource was last updated.
   */
  updatedAt: any;
  userId: number | null;
  websiteUrl: string | null;
  whatnotUser: string | null;
  youtubeUser: string | null;
  zip: string | null;
}

export interface GetUser_getUser_profileImages {
  __typename: "UserProfileImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string | null;
  isApproved: boolean | null;
}

export interface GetUser_getUser_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface GetUser_getUser {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  collectionValue: number;
  investment: number;
  cardCount: number;
  followers: GetUser_getUser_followers[] | null;
  followerCount: number;
  followingCount: number;
  createdAt: any | null;
  cardGrades: GetUser_getUser_cardGrades[] | null;
  email: string | null;
  profile: GetUser_getUser_profile | null;
  profileImages: GetUser_getUser_profileImages[] | null;
  approvedProfileImages: GetUser_getUser_approvedProfileImages[] | null;
}

export interface GetUser {
  /**
   * Find a user by ID
   */
  getUser: GetUser_getUser;
}

export interface GetUserVariables {
  id: string;
  playerId?: string | null;
  sportId?: string | null;
}
