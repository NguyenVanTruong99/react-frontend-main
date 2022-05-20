/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListMyRecommendedFriendsd
// ====================================================

export interface ListMyRecommendedFriendsd_listMyRecommendedFriends_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListMyRecommendedFriendsd_listMyRecommendedFriends {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  followerCount: number;
  createdAt: any | null;
  approvedProfileImages: ListMyRecommendedFriendsd_listMyRecommendedFriends_approvedProfileImages[] | null;
}

export interface ListMyRecommendedFriendsd {
  /**
   * List recommended friends for a user
   */
  listMyRecommendedFriends: ListMyRecommendedFriendsd_listMyRecommendedFriends[] | null;
}
