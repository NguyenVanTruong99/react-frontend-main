/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserLogin
// ====================================================

export interface UserLogin_userLogin_authenticatable_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface UserLogin_userLogin_authenticatable {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  email: string | null;
  isOnboarded: boolean;
  approvedProfileImages: UserLogin_userLogin_authenticatable_approvedProfileImages[] | null;
}

export interface UserLogin_userLogin_credentials {
  __typename: "Credential";
  accessToken: string;
  client: string;
  expiry: number;
  uid: string;
}

export interface UserLogin_userLogin {
  __typename: "UserLoginPayload";
  authenticatable: UserLogin_userLogin_authenticatable;
  credentials: UserLogin_userLogin_credentials;
}

export interface UserLogin {
  userLogin: UserLogin_userLogin | null;
}

export interface UserLoginVariables {
  email: string;
  password: string;
}
