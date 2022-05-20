/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_registerUser_authenticatable {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface RegisterUser_registerUser_credentials {
  __typename: "Credential";
  accessToken: string;
  client: string;
  expiry: number;
  uid: string;
}

export interface RegisterUser_registerUser {
  __typename: "RegisterUserPayload";
  authenticatable: RegisterUser_registerUser_authenticatable;
  /**
   * Authentication credentials. Null if after signUp resource is not active for authentication (e.g. Email confirmation required).
   */
  credentials: RegisterUser_registerUser_credentials | null;
}

export interface RegisterUser {
  registerUser: RegisterUser_registerUser | null;
}

export interface RegisterUserVariables {
  username: string;
  email: string;
  password: string;
  confirmUrl?: string | null;
  passwordConfirmation: string;
}
