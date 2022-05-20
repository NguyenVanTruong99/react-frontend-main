/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SearchUsers
// ====================================================

export interface SearchUsers_searchUsers_results_items_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface SearchUsers_searchUsers_results_items_user {
  __typename: "User";
  username: string | null;
  createdAt: any | null;
  cardCount: number;
  followerCount: number;
  approvedProfileImages: SearchUsers_searchUsers_results_items_user_approvedProfileImages[] | null;
}

export interface SearchUsers_searchUsers_results_items {
  __typename: "SearchResultItem";
  id: string;
  type: string;
  highlight: string | null;
  user: SearchUsers_searchUsers_results_items_user | null;
}

export interface SearchUsers_searchUsers_results {
  __typename: "SearchResult";
  count: number;
  items: SearchUsers_searchUsers_results_items[];
  type: string;
}

export interface SearchUsers_searchUsers {
  __typename: "SearchResultSet";
  results: SearchUsers_searchUsers_results[];
}

export interface SearchUsers {
  /**
   * return users from a query string
   */
  searchUsers: SearchUsers_searchUsers;
}

export interface SearchUsersVariables {
  offsetAttributes?: OffsetAttributes | null;
  term: string;
}
