/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListMyUserMutualFriends
// ====================================================

export interface ListMyUserMutualFriends_listMyUserMutualFriends_following_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListMyUserMutualFriends_listMyUserMutualFriends_following {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: ListMyUserMutualFriends_listMyUserMutualFriends_following_approvedProfileImages[] | null;
}

export interface ListMyUserMutualFriends_listMyUserMutualFriends_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListMyUserMutualFriends_listMyUserMutualFriends_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: ListMyUserMutualFriends_listMyUserMutualFriends_user_approvedProfileImages[] | null;
}

export interface ListMyUserMutualFriends_listMyUserMutualFriends {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  following: ListMyUserMutualFriends_listMyUserMutualFriends_following;
  user: ListMyUserMutualFriends_listMyUserMutualFriends_user;
}

export interface ListMyUserMutualFriends {
  /**
   * List mutual friends for a user
   */
  listMyUserMutualFriends: ListMyUserMutualFriends_listMyUserMutualFriends[] | null;
}

export interface ListMyUserMutualFriendsVariables {
  userId: string;
  query?: string | null;
}
