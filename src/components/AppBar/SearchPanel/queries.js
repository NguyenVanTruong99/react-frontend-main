import gql from "graphql-tag";

const searchAll = gql`
  query SearchAll($offsetAttributes: OffsetAttributes, $term: String!) {
    searchAll(offsetAttributes: $offsetAttributes, term: $term) {
      results {
        count
        items {
          id
          type
          highlight
          card {
            name
            cardNumber
            frontUrl
            cardSet {
              name
              variety
              year
            }
          }
          player {
            headshotUrl
            fullName
            status
            team {
              location
              nickname
            }
            sport {
              name
            }
          }
          user {
            username
            profile {
              location
            }
            approvedProfileImages {
              imageUrl
            }
          }
          userCard {
            id
            user {
              id
              username
              profileImages {
                id
                imageUrl
                isApproved
              }
              approvedProfileImages {
                imageUrl
              }
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
            userCardImages {
              imageUrl
              id
              view
            }
            card {
              name
              cardNumber
              frontUrl
              cardSet {
                name
                variety
                year
              }
            }
          }
        }
        type
      }
    }
  }
`;

export { searchAll };
