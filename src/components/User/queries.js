import { baseFragment as baseCardGradeFragment } from "components/CardGrade/fragments";
import { baseFragment } from "./fragments";
import gql from "graphql-tag";

const getUser = gql`
  query GetUserd($id: ID!, $playerId: ID, $sportId: ID) {
    getUser(id: $id) {
      ...UserBase
      username
      email
      profile {
        address1
        address2
        bio
        city
        clubhouseUser
        country
        createdAt
        firstName
        id
        instagramUser
        lastName
        myslabsUser
        location
        phoneNumber
        snapchatUser
        starstockUser
        state
        tiktokUser
        twitterUser
        updatedAt
        userId
        websiteUrl
        whatnotUser
        youtubeUser
        zip
      }
      profileImages {
        id
        imageUrl
        isApproved
      }
      approvedProfileImages {
        imageUrl
      }
    }
  }
  ${baseFragment}
`;

const getUserWithCardGrades = gql`
  query GetUser($id: ID!, $playerId: ID, $sportId: ID) {
    getUser(id: $id) {
      ...UserBase
      cardGrades(playerId: $playerId, sportId: $sportId) {
        ...CardGradeBase
        userCard(userId: $id) {
          id
          purchasePrice
        }
        card {
          name
          cardSet {
            name
            year
            sport {
              name
            }
          }
        }
      }
      username
      email
      profile {
        address1
        address2
        bio
        city
        clubhouseUser
        country
        createdAt
        firstName
        id
        instagramUser
        lastName
        myslabsUser
        location
        phoneNumber
        snapchatUser
        starstockUser
        state
        tiktokUser
        twitterUser
        updatedAt
        userId
        websiteUrl
        whatnotUser
        youtubeUser
        zip
      }
      profileImages {
        id
        imageUrl
        isApproved
      }
      approvedProfileImages {
        imageUrl
      }
    }
  }
  ${baseFragment}
  ${baseCardGradeFragment}
`;

const getContentModules = gql`
  query ListMyContentModules {
    listMyContentModules {
      data
      module {
        name
        rank
        displayName
      }
    }
  }
`;

const listUsers = gql`
  query ListUsers($userIds: [String!]) {
    listUsers(userIds: $userIds) {
      profile {
        bio
        city
        firstName
        displayName
        createdAt
        id
        lastName
      }
      approvedProfileImages {
        imageUrl
      }
      cardCount
      email
      id
      username
    }
  }
`;

const fetchCurrentUser = gql`
  query FetchCurrentUser {
    fetchCurrentUser {
      username
    }
  }
`;

const searchUsers = gql`
  query SearchUsers($offsetAttributes: OffsetAttributes, $term: String!) {
    searchUsers(offsetAttributes: $offsetAttributes, term: $term) {
      results {
        count
        items {
          id
          type
          highlight
          user {
            username
            createdAt
            cardCount
            followerCount
            approvedProfileImages {
              imageUrl
            }
          }
        }
        type
      }
    }
  }
`;

export {
  getUser,
  getContentModules,
  listUsers,
  getUserWithCardGrades,
  fetchCurrentUser,
  searchUsers,
};
