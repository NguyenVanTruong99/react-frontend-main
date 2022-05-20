/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUserFollowers
// ====================================================

export interface ListUserFollowers_listUserFollowers_following_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUserFollowers_listUserFollowers_following {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: ListUserFollowers_listUserFollowers_following_approvedProfileImages[] | null;
}

export interface ListUserFollowers_listUserFollowers_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUserFollowers_listUserFollowers_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: ListUserFollowers_listUserFollowers_user_approvedProfileImages[] | null;
}

export interface ListUserFollowers_listUserFollowers {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  following: ListUserFollowers_listUserFollowers_following;
  user: ListUserFollowers_listUserFollowers_user;
}

export interface ListUserFollowers {
  /**
   * List followers for a user
   */
  listUserFollowers: ListUserFollowers_listUserFollowers[] | null;
}

export interface ListUserFollowersVariables {
  userId: string;
  query?: string | null;
}
