import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import ProfileUserModule from "components/Profile/UserModule";
import { listMyRecommendedFriendsQuery } from "components/Profile/YouMayKnowList/queries";
import { useMemo, memo, useEffect, useState } from "react";

const getARandomPlayerOfInterestQuery = gql`
  query GetARandomPlayerOfInterest {
    getARandomPlayerOfInterest {
      fullName
      id
    }
  }
`;

const getARandomInterestQuery = gql`
  query GetARandomInterest {
    getARandomInterest {
      name
      id
    }
  }
`;

const listUsersWithSimilarInterestQuery = gql`
  query ListUsersWithSimilarInterest(
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
  const { loading: loadingPlayer, error: errorPlayer, data: { getARandomPlayerOfInterest: player } = {} } = useQuery(getARandomPlayerOfInterestQuery);
  const { loading: loadingInterest, error: errorInterest, data: { getARandomInterest: interest } = {} } = useQuery(getARandomInterestQuery);
  const hasPlayer = !loadingPlayer && !!player;
  const hasInterest = !loadingInterest && !!interest;
  const interests = [player, interest].filter(i => !!i);
  const [selectedInterestIndex, setSelectedInterestIndex] = useState(null);
  const selectedInterest = selectedInterestIndex === null ? null : interests[selectedInterestIndex]; //!!interests.length ? interests[Math.floor(Math.random()*interests.length)] : null;
  const selectedInterestTypename = selectedInterest?.__typename;
  const selectedInterestId = selectedInterest?.id;
  const selectedInterestHeader = selectedInterest?.name ?? selectedInterest?.fullName

  !!errorPlayer && console.error(errorPlayer)
  !!errorInterest && console.error(errorInterest)

  useEffect(() => {
    (hasInterest || hasPlayer) &&
    setSelectedInterestIndex(Math.floor(Math.random()*(Number(hasPlayer) + Number(hasInterest))))
  }, [hasPlayer, hasInterest])

  

  return <MomoizedBecauseYouLikeListContainerInner selectedInterestId={selectedInterestId} selectedInterestTypename={selectedInterestTypename} selectedInterestHeader={selectedInterestHeader} />
}

const BecauseYouLikeListContainerInner = ({selectedInterestId, selectedInterestTypename, selectedInterestHeader}) => {
  
  

  const query = useMemo(() => ({
    query: listUsersWithSimilarInterestQuery,
    variables: {
      interestType: selectedInterestTypename,
      interestId: selectedInterestId
    }
  }), [selectedInterestTypename, selectedInterestId]);

  // console.log("selectedInterestHeader", selectedInterestHeader)

  const { error: errorUsers, data: { listUsersWithSimilarInterest: users = [] } = {} } = useQuery(query.query, {
    skip: !selectedInterestId || !selectedInterestTypename,
    variables: query.variables
  });
  const refetchQueries = useMemo(() => [listMyRecommendedFriendsQuery], [])

  !!errorUsers && console.error(errorUsers)

  return !users.length ? null : <ProfileUserModule
    refetchQueries={refetchQueries} 
    users={users} 
    title={<>
      Because You Like&nbsp;
      <Typography component="span" color="grey.500">"{selectedInterestHeader}"</Typography>
    </>} 
  />
}

const MomoizedBecauseYouLikeListContainerInner = memo(BecauseYouLikeListContainerInner);

export default BecauseYouLikeListContainer