/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SaleBase
// ====================================================

export interface SaleBase_saleSource {
  __typename: "SaleSource";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string;
  description: string | null;
  logoUrl: string | null;
}

export interface SaleBase_auctionListing {
  __typename: "AuctionListing";
  listingUrl: string | null;
  imageUrl: string | null;
}

export interface SaleBase_saleType {
  __typename: "SaleType";
  name: string;
  description: string;
}

export interface SaleBase {
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
  saleSource: SaleBase_saleSource;
  auctionListing: SaleBase_auctionListing | null;
  saleType: SaleBase_saleType | null;
}
