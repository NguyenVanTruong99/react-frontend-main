import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserFollowerBase on UserFollower {
    id
    following {
      id
      username
      approvedProfileImages {
        imageUrl
      }
    }
    user {
      id
      username
      approvedProfileImages {
        imageUrl
      }
    }
  }
`;

export { baseFragment };
