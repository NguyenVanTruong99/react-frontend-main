/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserProfile
// ====================================================

export interface GetUserProfile_getUserProfile {
  __typename: "UserProfile";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  bio: string | null;
  firstName: string | null;
  lastName: string | null;
  location: string | null;
  phoneNumber: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  websiteUrl: string | null;
  instagramUser: string | null;
  myslabsUser: string | null;
  starstockUser: string | null;
  twitterUser: string | null;
  facebookName: string | null;
  youtubeUser: string | null;
  ebayName: string | null;
  tiktokUser: string | null;
  snapchatUser: string | null;
  whatnotUser: string | null;
}

export interface GetUserProfile {
  /**
   * Find a user profile by ID
   */
  getUserProfile: GetUserProfile_getUserProfile;
}

export interface GetUserProfileVariables {
  id: string;
}
