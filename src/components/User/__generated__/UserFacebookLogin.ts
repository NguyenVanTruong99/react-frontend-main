/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserFacebookLoginInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UserFacebookLogin
// ====================================================

export interface UserFacebookLogin_userFacebookLogin_authenticatable {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  email: string | null;
}

export interface UserFacebookLogin_userFacebookLogin_credentials {
  __typename: "Credential";
  accessToken: string;
  client: string;
  expiry: number;
  uid: string;
}

export interface UserFacebookLogin_userFacebookLogin {
  __typename: "UserFacebookLoginPayload";
  authenticatable: UserFacebookLogin_userFacebookLogin_authenticatable;
  credentials: UserFacebookLogin_userFacebookLogin_credentials;
}

export interface UserFacebookLogin {
  userFacebookLogin: UserFacebookLogin_userFacebookLogin | null;
}

export interface UserFacebookLoginVariables {
  input: UserFacebookLoginInput;
}
