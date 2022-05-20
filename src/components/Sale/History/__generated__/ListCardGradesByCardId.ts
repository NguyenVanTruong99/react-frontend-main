/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListCardGradesByCardId
// ====================================================

export interface ListCardGradesByCardId_listSalesByCardGradeId_pageInfo {
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

export interface ListCardGradesByCardId_listSalesByCardGradeId_edges_node_saleSource {
  __typename: "SaleSource";
  logoUrl: string | null;
  name: string;
}

export interface ListCardGradesByCardId_listSalesByCardGradeId_edges_node_saleType {
  __typename: "SaleType";
  name: string;
}

export interface ListCardGradesByCardId_listSalesByCardGradeId_edges_node_auctionListing {
  __typename: "AuctionListing";
  listingUrl: string | null;
}

export interface ListCardGradesByCardId_listSalesByCardGradeId_edges_node {
  __typename: "Sale";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  value: number;
  soldDate: any;
  saleSource: ListCardGradesByCardId_listSalesByCardGradeId_edges_node_saleSource;
  saleType: ListCardGradesByCardId_listSalesByCardGradeId_edges_node_saleType | null;
  auctionListing: ListCardGradesByCardId_listSalesByCardGradeId_edges_node_auctionListing | null;
}

export interface ListCardGradesByCardId_listSalesByCardGradeId_edges {
  __typename: "SaleEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: ListCardGradesByCardId_listSalesByCardGradeId_edges_node | null;
}

export interface ListCardGradesByCardId_listSalesByCardGradeId {
  __typename: "SaleConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: ListCardGradesByCardId_listSalesByCardGradeId_pageInfo;
  /**
   * A list of edges.
   */
  edges: (ListCardGradesByCardId_listSalesByCardGradeId_edges | null)[] | null;
}

export interface ListCardGradesByCardId {
  listSalesByCardGradeId: ListCardGradesByCardId_listSalesByCardGradeId;
}

export interface ListCardGradesByCardIdVariables {
  cardGradeId: string;
  startDate?: any | null;
  after?: string | null;
}
