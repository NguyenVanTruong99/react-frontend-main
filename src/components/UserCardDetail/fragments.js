import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserCardDetailBase on UserCardDetail {
    id
    detailName
  }
`;

export { baseFragment };
