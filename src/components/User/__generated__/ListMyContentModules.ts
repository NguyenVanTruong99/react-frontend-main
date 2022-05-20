/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListMyContentModules
// ====================================================

export interface ListMyContentModules_listMyContentModules_module {
  __typename: "ContentModule";
  name: string | null;
  rank: number | null;
  displayName: string | null;
}

export interface ListMyContentModules_listMyContentModules {
  __typename: "ContentModuleData";
  data: any | null;
  module: ListMyContentModules_listMyContentModules_module;
}

export interface ListMyContentModules {
  /**
   * List content modules for current user, if any
   */
  listMyContentModules: ListMyContentModules_listMyContentModules[];
}
