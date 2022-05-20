/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadUserProfileImage
// ====================================================

export interface UploadUserProfileImage_uploadUserProfileImage {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
}

export interface UploadUserProfileImage {
  uploadUserProfileImage: UploadUserProfileImage_uploadUserProfileImage;
}

export interface UploadUserProfileImageVariables {
  image: any;
}
