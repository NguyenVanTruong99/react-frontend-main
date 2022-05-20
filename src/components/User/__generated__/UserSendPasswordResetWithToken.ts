/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserSendPasswordResetWithToken
// ====================================================

export interface UserSendPasswordResetWithToken_userSendPasswordResetWithToken {
  __typename: "UserSendPasswordResetWithTokenPayload";
  message: string;
}

export interface UserSendPasswordResetWithToken {
  userSendPasswordResetWithToken: UserSendPasswordResetWithToken_userSendPasswordResetWithToken | null;
}

export interface UserSendPasswordResetWithTokenVariables {
  email: string;
  redirectUrl: string;
}
