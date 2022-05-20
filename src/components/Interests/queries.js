import gql from "graphql-tag";

const list = gql`
  query ListInterests {
    listInterests {
      id
      name
      slug
      category {
        name
        slug
      }
    }
  }
`;

export { list as listInterests };
