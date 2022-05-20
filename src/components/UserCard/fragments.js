import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserCardBase on UserCard {
    id
    acquiredAt
    editionNumber
    editionSize
    acquisitionSource
    cardStatus
    purchasePrice
    storageLocation
    gradingCost
    isPublic
    isStaged
    isCertified
    gradeId
    cardGradeId
    showcaseCount
    userCardDetails {
      detailName
    }
    displayGrade {
      id
      gradeVendor {
        id
        name
      }
      grade
      gradeLabel
    }
    boundGrade {
      id
      gradeVendor {
        id
        name
      }
      grade
      gradeLabel
    }
    cardGrade {
      id
      gradePop
      currentValue
      grade {
        grade
        gradeLabel
        id
        gradeVendor {
          id
          name
        }
      }
      gradeVendorId
      gradeVendor {
        id
        name
      }
    }
    userCardImages {
      imageUrl
      id
      view
    }
    card {
      id
      name
      hasImage
      noxxUuid
      cardNumber
      frontUrl
      fullName
      players {
        id
        fullName
      }
      manufacturer {
        id
        name
      }
      cardSet {
        id
        name
        fullName
        manufacturerId
        year
        variety
        sport {
          name
        }
      }
    }
    cardId
    cardSet {
      id
    }
    cardSetId
    checklistNumber
    createdAt
    hasImage
    isOwned
    manufacturerId
    player {
      id
    }
    playerId
    soldAt
    sport {
      id
    }
    sportId
    updatedAt
    user {
      id
      approvedProfileImages {
        imageUrl
      }
    }
    userId
    year
    manufacturerName
    cardSetName
    playerName
    sportName
    certNumber
    gradeVendorName
    grade
    cardNumber
    storageLocation
  }
`;

export { baseFragment };
