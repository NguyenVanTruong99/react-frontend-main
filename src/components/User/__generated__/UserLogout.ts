/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserLogout
// ====================================================

export interface UserLogout_userLogout_authenticatable {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UserLogout_userLogout {
  __typename: "UserLogoutPayload";
  authenticatable: UserLogout_userLogout_authenticatable;
}

export interface UserLogout {
  userLogout: UserLogout_userLogout | null;
}
