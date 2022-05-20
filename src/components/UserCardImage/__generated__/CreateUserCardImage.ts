/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserCardImageInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserCardImage
// ====================================================

export interface CreateUserCardImage_createUserCardImage {
  __typename: "UserCardImage";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  userCardId: string;
  imageUrl: string;
  view: string | null;
}

export interface CreateUserCardImage {
  createUserCardImage: CreateUserCardImage_createUserCardImage | null;
}

export interface CreateUserCardImageVariables {
  input: CreateUserCardImageInput;
}
