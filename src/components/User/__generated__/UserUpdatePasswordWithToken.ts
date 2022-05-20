/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserUpdatePasswordWithToken
// ====================================================

export interface UserUpdatePasswordWithToken_userUpdatePasswordWithToken_authenticatable {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UserUpdatePasswordWithToken_userUpdatePasswordWithToken_credentials {
  __typename: "Credential";
  accessToken: string;
  client: string;
  expiry: number;
  uid: string;
}

export interface UserUpdatePasswordWithToken_userUpdatePasswordWithToken {
  __typename: "UserUpdatePasswordWithTokenPayload";
  authenticatable: UserUpdatePasswordWithToken_userUpdatePasswordWithToken_authenticatable;
  /**
   * Authentication credentials. Resource must be signed_in for credentials to be returned.
   */
  credentials: UserUpdatePasswordWithToken_userUpdatePasswordWithToken_credentials | null;
}

export interface UserUpdatePasswordWithToken {
  userUpdatePasswordWithToken: UserUpdatePasswordWithToken_userUpdatePasswordWithToken | null;
}

export interface UserUpdatePasswordWithTokenVariables {
  password: string;
  passwordConfirmation: string;
  resetPasswordToken: string;
}
