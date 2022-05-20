/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUserFollowing
// ====================================================

export interface ListUserFollowing_listUserFollowing_following_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUserFollowing_listUserFollowing_following {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: ListUserFollowing_listUserFollowing_following_approvedProfileImages[] | null;
}

export interface ListUserFollowing_listUserFollowing_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUserFollowing_listUserFollowing_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: ListUserFollowing_listUserFollowing_user_approvedProfileImages[] | null;
}

export interface ListUserFollowing_listUserFollowing {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  following: ListUserFollowing_listUserFollowing_following;
  user: ListUserFollowing_listUserFollowing_user;
}

export interface ListUserFollowing {
  /**
   * List following for a user
   */
  listUserFollowing: ListUserFollowing_listUserFollowing[] | null;
}

export interface ListUserFollowingVariables {
  userId: string;
  query?: string | null;
}
