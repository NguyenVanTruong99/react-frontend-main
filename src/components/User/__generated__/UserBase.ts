/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserBase
// ====================================================

export interface UserBase_followers {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  followingId: string;
  userId: string;
}

export interface UserBase {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  collectionValue: number;
  investment: number;
  cardCount: number;
  followers: UserBase_followers[] | null;
  followerCount: number;
  followingCount: number;
  createdAt: any | null;
}
