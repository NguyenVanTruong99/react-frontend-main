/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserGoogleLoginInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UserGoogleLogin
// ====================================================

export interface UserGoogleLogin_userGoogleLogin_authenticatable {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UserGoogleLogin_userGoogleLogin_credentials {
  __typename: "Credential";
  accessToken: string;
  client: string;
  expiry: number;
  uid: string;
}

export interface UserGoogleLogin_userGoogleLogin {
  __typename: "UserGoogleLoginPayload";
  authenticatable: UserGoogleLogin_userGoogleLogin_authenticatable;
  credentials: UserGoogleLogin_userGoogleLogin_credentials;
}

export interface UserGoogleLogin {
  userGoogleLogin: UserGoogleLogin_userGoogleLogin | null;
}

export interface UserGoogleLoginVariables {
  input: UserGoogleLoginInput;
}
