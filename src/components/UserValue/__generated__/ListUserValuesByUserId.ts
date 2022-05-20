/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListUserValuesByUserId
// ====================================================

export interface ListUserValuesByUserId_listUserValuesByUserId {
  __typename: "UserValue";
  userId: string;
  valuedDate: any;
  count: number;
  value: number | null;
}

export interface ListUserValuesByUserId {
  listUserValuesByUserId: ListUserValuesByUserId_listUserValuesByUserId[];
}

export interface ListUserValuesByUserIdVariables {
  userId: string;
  sportId?: string | null;
  offsetAttributes?: OffsetAttributes | null;
  startDate?: any | null;
}
