import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserCardImageBase on UserCardImage {
    id
    userCardId
    imageUrl
    view
  }
`;

export { baseFragment };
