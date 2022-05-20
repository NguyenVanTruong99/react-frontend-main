/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUsers
// ====================================================

export interface ListUsers_listUsers_profile {
  __typename: "UserProfile";
  bio: string | null;
  city: string | null;
  firstName: string | null;
  displayName: string | null;
  /**
   * The date and time that the resource was created.
   */
  createdAt: any;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  lastName: string | null;
}

export interface ListUsers_listUsers_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUsers_listUsers {
  __typename: "User";
  profile: ListUsers_listUsers_profile | null;
  approvedProfileImages: ListUsers_listUsers_approvedProfileImages[] | null;
  cardCount: number;
  email: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
}

export interface ListUsers {
  /**
   * List users
   */
  listUsers: ListUsers_listUsers[];
}

export interface ListUsersVariables {
  userIds?: string[] | null;
}
