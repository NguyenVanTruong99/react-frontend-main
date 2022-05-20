/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GradeVendorName } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListUserCollectionCardsByUserCollectionId
// ====================================================

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_user {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade_grade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade_grade {
  __typename: "Grade";
  grade: number;
  gradeLabel: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradeVendor: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade_grade_gradeVendor;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade_gradeVendor {
  __typename: "GradeVendor";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: GradeVendorName;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade {
  __typename: "CardGrade";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  gradePop: number;
  currentValue: number | null;
  grade: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade_grade;
  gradeVendorId: string;
  gradeVendor: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade_gradeVendor;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_card_cardSet {
  __typename: "CardSet";
  year: string;
  name: string;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_card {
  __typename: "Card";
  name: string;
  cardNumber: string | null;
  frontUrl: string | null;
  cardSet: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_card_cardSet;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_userCardImages {
  __typename: "UserCardImage";
  imageUrl: string;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  view: string | null;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard {
  __typename: "UserCard";
  user: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_user;
  cardGrade: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_cardGrade | null;
  card: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_card | null;
  userCardImages: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard_userCardImages[] | null;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node {
  __typename: "UserCollectionCard";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  /**
   * The date and time that the resource was created.
   */
  createdAt: any;
  userCardId: string;
  userCollectionId: string;
  userCard: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node_userCard;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges {
  __typename: "UserCollectionCardEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges_node | null;
}

export interface ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId {
  __typename: "UserCollectionCardConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_pageInfo;
  /**
   * A list of edges.
   */
  edges: (ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId_edges | null)[] | null;
}

export interface ListUserCollectionCardsByUserCollectionId {
  /**
   * List all user collection cards by user collection id
   */
  listUserCollectionCardsByUserCollectionId: ListUserCollectionCardsByUserCollectionId_listUserCollectionCardsByUserCollectionId;
}

export interface ListUserCollectionCardsByUserCollectionIdVariables {
  userCollectionId: string;
  after?: string | null;
}
