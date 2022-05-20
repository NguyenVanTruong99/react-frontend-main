import gql from "graphql-tag";

const baseFragment = gql`
  fragment CardGradeBase on CardGrade {
    id
    createdAt
    updatedAt
    gradeId
    gradeVendorId
    cardId
    gradePop
    startValue
    currentValue
    lastSold
    salesCount

    grade {
      id
      grade
      gradeLabel
      gradeVendorId
      gradeDisplay
      gradeVendor {
        id
        name
      }
    }

    gradeVendor {
      name
      id
    }
  }
`;

export { baseFragment };
