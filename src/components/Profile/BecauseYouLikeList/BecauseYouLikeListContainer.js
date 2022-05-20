import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import ProfileUserModule from "components/Profile/UserModule";
import { useMemo } from "react";

const getARandomPlayerOfInterestQuery = gql`
  query GetARandomPlayerOfInterestd {
    getARandomPlayerOfInterest {
      fullName
      id
    }
  }
`;

const getARandomInterestQuery = gql`
  query GetAdRandomInterest {
    getARandomInterest {
      name
      id
    }
  }
`;

const listUsersWithSimilarInterestQuery = gql`
  query ListUserdsWithSimilarInterest(
    $interestType: String!
    $interestId: ID!
  ) {
    listUsersWithSimilarInterest(
      interestType: $interestType
      interestId: $interestId
    ) {
      id
      username
      followerCount
      createdAt
      approvedProfileImages {
        imageUrl
      }
    }
  }
`;

const BecauseYouLikeListContainer = () => {
  const { error: errorPlayer, data: { getARandomPlayerOfInterest: player } = {} } = useQuery(getARandomPlayerOfInterestQuery);
  const { error: errorInterest, data: { getARandomInterest: interest } = {} } = useQuery(getARandomInterestQuery);
  const interests = [player, interest].filter(i => !!i);
  const selectedInterest = !!interests.length ? interests[Math.floor(Math.random()*interests.length)] : null;
  const selectedInterestTypename = selectedInterest?.__typename;
  const selectedInterestId = selectedInterest?.id;

  const query = useMemo(() => ({
    query: listUsersWithSimilarInterestQuery,
    variables: {
      interestType: selectedInterestTypename,
      interestId: selectedInterestId
    }
  }), [selectedInterestTypename, selectedInterestId]);

  console.log(query)

  const { error: errorUsers, data: { listUsersWithSimilarInterest: users = [] } = {} } = useQuery(query.query, {
    skip: !selectedInterestId || !selectedInterestTypename,
    variables: query.variables
  });
  const refetchQueries = useMemo(() => [query], [query])

  !!errorPlayer && console.error(errorPlayer)
  !!errorInterest && console.error(errorInterest)
  !!errorUsers && console.error(errorUsers)

  return !users.length ? null : <ProfileUserModule
    refetchQueries={refetchQueries} 
    users={users} 
    title={<>
      Because You Like&nbsp;
      <Typography component="span" color="grey.500">"{selectedInterest?.name ?? selectedInterest?.fullName}"</Typography>
    </>} 
  />
}

export default BecauseYouLikeListContainer