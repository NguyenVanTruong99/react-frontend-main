import gql from "graphql-tag";

const listGrades = gql`
  query ListGrades($offsetAttributes: OffsetAttributes) {
    listGrades(offsetAttributes: $offsetAttributes) {
      id
      grade
      gradeLabel
      gradeDisplay
      gradeVendorId
      gradeVendor {
        id
        name
      }
    }
  }
`;

export { listGrades };
