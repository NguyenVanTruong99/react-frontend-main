/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListMyRecommendedFriends
// ====================================================

export interface ListMyRecommendedFriends_listMyRecommendedFriends_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListMyRecommendedFriends_listMyRecommendedFriends {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  followerCount: number;
  createdAt: any | null;
  approvedProfileImages: ListMyRecommendedFriends_listMyRecommendedFriends_approvedProfileImages[] | null;
}

export interface ListMyRecommendedFriends {
  /**
   * List recommended friends for a user
   */
  listMyRecommendedFriends: ListMyRecommendedFriends_listMyRecommendedFriends[] | null;
}
