import gql from "graphql-tag";

const baseFragment = gql`
  fragment CardBase on Card {
    id
    name
    hasImage
    noxxUuid
    cardNumber
    totalGraded
    totalSales
    frontUrl
    details {
      detailName
    }
    cardImages {
      id
      imageUrl
    }
    players {
      id
      fullName
      isHof
    }
    manufacturer {
      id
      name
    }
    cardSet {
      id
      name
      manufacturerId
      year
      variety
      sport {
        name
      }
    }
  }
`;

export { baseFragment };
