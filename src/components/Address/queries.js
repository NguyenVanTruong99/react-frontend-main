import gql from "graphql-tag";

const listCountries = gql`
  query ListCountries {
    listCountries {
      id
      name
      iso2
    }
  }
`;

const listStatesByCountryId = gql`
  query ListStatesByCountryId($countryId: ID!) {
    listStatesByCountryId(countryId: $countryId) {
      id
      name
      stateCode
      country {
        id
      }
    }
  }
`;

export { listCountries, listStatesByCountryId };
