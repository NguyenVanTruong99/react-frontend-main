/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCurrentUser
// ====================================================

export interface FetchCurrentUser_fetchCurrentUser {
  __typename: "User";
  username: string | null;
}

export interface FetchCurrentUser {
  /**
   * Fetch the current logged in user
   */
  fetchCurrentUser: FetchCurrentUser_fetchCurrentUser | null;
}
