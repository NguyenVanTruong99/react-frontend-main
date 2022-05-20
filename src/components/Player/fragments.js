import gql from "graphql-tag";

const baseFragment = gql`
  fragment PlayerBase on Player {
    id
    fullName
    headshotUrl
    jerseyNumber
    careerStats
    notableCardIds
    status
    height
    weight
    birthDate
    birthPlace
    draftPick
    draftRound
    draftYear
    draftTeam {
      nickname
      abbrev
      id
      location
    }
    experience
    rookieYear
    position {
      name
      abbrev
      sport {
        name
      }
    }
    sport {
      name
    }
    team {
      nickname
      location
    }
  }
`;

export { baseFragment };
