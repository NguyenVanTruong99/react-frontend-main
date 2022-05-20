/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListCardGradesByCardIdd
// ====================================================

export interface ListCardGradesByCardIdd_listSalesByCardGradeId_pageInfo {
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

export interface ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node_saleSource {
  __typename: "SaleSource";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  description: string | null;
  logoUrl: string | null;
}

export interface ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node_auctionListing {
  __typename: "AuctionListing";
  listingUrl: string | null;
  imageUrl: string | null;
}

export interface ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node_saleType {
  __typename: "SaleType";
  name: string;
  description: string;
}

export interface ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node {
  __typename: "Sale";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any;
  updatedAt: any;
  cardId: string;
  cardGradeId: string;
  saleSourceId: string;
  auctionListingId: string | null;
  soldDate: any;
  saleTypeId: string | null;
  value: number;
  saleSource: ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node_saleSource;
  auctionListing: ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node_auctionListing | null;
  saleType: ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node_saleType | null;
}

export interface ListCardGradesByCardIdd_listSalesByCardGradeId_edges {
  __typename: "SaleEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: ListCardGradesByCardIdd_listSalesByCardGradeId_edges_node | null;
}

export interface ListCardGradesByCardIdd_listSalesByCardGradeId {
  __typename: "SaleConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: ListCardGradesByCardIdd_listSalesByCardGradeId_pageInfo;
  /**
   * A list of edges.
   */
  edges: (ListCardGradesByCardIdd_listSalesByCardGradeId_edges | null)[] | null;
}

export interface ListCardGradesByCardIdd {
  listSalesByCardGradeId: ListCardGradesByCardIdd_listSalesByCardGradeId;
}

export interface ListCardGradesByCardIddVariables {
  cardGradeId: string;
  startDate?: any | null;
  after?: string | null;
}
