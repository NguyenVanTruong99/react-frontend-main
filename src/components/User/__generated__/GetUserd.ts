/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserd
// ====================================================

export interface GetUserd_getUser_followers {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  followingId: string;
  userId: string;
}

export interface GetUserd_getUser_profile {
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

export interface GetUserd_getUser_profileImages {
  __typename: "UserProfileImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  imageUrl: string | null;
  isApproved: boolean | null;
}

export interface GetUserd_getUser_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface GetUserd_getUser {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  collectionValue: number;
  investment: number;
  cardCount: number;
  followers: GetUserd_getUser_followers[] | null;
  followerCount: number;
  followingCount: number;
  createdAt: any | null;
  email: string | null;
  profile: GetUserd_getUser_profile | null;
  profileImages: GetUserd_getUser_profileImages[] | null;
  approvedProfileImages: GetUserd_getUser_approvedProfileImages[] | null;
}

export interface GetUserd {
  /**
   * Find a user by ID
   */
  getUser: GetUserd_getUser;
}

export interface GetUserdVariables {
  id: string;
  playerId?: string | null;
  sportId?: string | null;
}
