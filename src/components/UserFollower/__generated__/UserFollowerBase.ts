/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFollowerBase
// ====================================================

export interface UserFollowerBase_following_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UserFollowerBase_following {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: UserFollowerBase_following_approvedProfileImages[] | null;
}

export interface UserFollowerBase_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UserFollowerBase_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  approvedProfileImages: UserFollowerBase_user_approvedProfileImages[] | null;
}

export interface UserFollowerBase {
  __typename: "UserFollower";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  following: UserFollowerBase_following;
  user: UserFollowerBase_user;
}
