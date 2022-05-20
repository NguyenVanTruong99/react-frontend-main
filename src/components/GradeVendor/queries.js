import gql from "graphql-tag";

const listGradeVendors = gql`
  query ListGradeVendors($offsetAttributes: OffsetAttributes) {
    listGradeVendors(offsetAttributes: $offsetAttributes) {
      id
      name
    }
  }
`;

export { listGradeVendors };
