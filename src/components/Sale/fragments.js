import gql from "graphql-tag";

const baseFragment = gql`
  fragment SaleBase on Sale {
    id
    createdAt
    updatedAt

    cardId
    cardGradeId
    saleSourceId
    auctionListingId
    soldDate
    saleTypeId
    value

    saleSource {
      id
      name
      description
      logoUrl
    }

    auctionListing {
      listingUrl
      imageUrl
    }

    saleType {
      name
      description
    }
  }
`;

export { baseFragment };
