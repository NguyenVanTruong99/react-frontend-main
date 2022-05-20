/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SaleHistoryItemFragment
// ====================================================

export interface SaleHistoryItemFragment_saleSource {
  __typename: "SaleSource";
  logoUrl: string | null;
  name: string;
}

export interface SaleHistoryItemFragment_saleType {
  __typename: "SaleType";
  name: string;
}

export interface SaleHistoryItemFragment_auctionListing {
  __typename: "AuctionListing";
  listingUrl: string | null;
}

export interface SaleHistoryItemFragment {
  __typename: "Sale";
  value: number;
  soldDate: any;
  saleSource: SaleHistoryItemFragment_saleSource;
  saleType: SaleHistoryItemFragment_saleType | null;
  auctionListing: SaleHistoryItemFragment_auctionListing | null;
}
