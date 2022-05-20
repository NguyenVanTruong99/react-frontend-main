import gql from "graphql-tag";

const createUserCollectionView = gql`
  mutation CreateUserCollectionView($input: CreateUserCollectionViewInput!) {
    createUserCollectionView(input: $input) {
      id
    }
  }
`;

export { createUserCollectionView };
