/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListUserCardDetails
// ====================================================

export interface ListUserCardDetails_listUserCardDetails {
  __typename: "UserCardDetail";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  detailName: string;
}

export interface ListUserCardDetails {
  /**
   * List all user card detail types
   */
  listUserCardDetails: ListUserCardDetails_listUserCardDetails[];
}

export interface ListUserCardDetailsVariables {
  offsetAttributes?: OffsetAttributes | null;
}
