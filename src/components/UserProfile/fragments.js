import gql from "graphql-tag";

const baseFragment = gql`
  fragment UserProfileBase on UserProfile {
    id
    bio
    firstName
    lastName
    location
    phoneNumber
    address1
    address2
    city
    state
    zip
    country
    websiteUrl
    instagramUser
    myslabsUser
    starstockUser
    twitterUser
    facebookName
    youtubeUser
    ebayName
    tiktokUser
    snapchatUser
    whatnotUser
  }
`;
export { baseFragment };
