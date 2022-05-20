/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteUserCardImageInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserCardImage
// ====================================================

export interface DeleteUserCardImage_deleteUserCardImage {
  __typename: "UserCardImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  userCardId: string;
  imageUrl: string;
  view: string | null;
}

export interface DeleteUserCardImage {
  deleteUserCardImage: DeleteUserCardImage_deleteUserCardImage | null;
}

export interface DeleteUserCardImageVariables {
  input: DeleteUserCardImageInput;
}
