import { createUserFollower, deleteUserFollower } from "../mutations";
import { listUserFollowers, listUserFollowing } from "../queries";
import { useCallback, useContext, useMemo, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { CurrentUserContext } from "contexts/CurrentUser";
import UserFollowerButtonView from "./UserFollowerButtonView";
import { getUser } from "components/User/queries";

// import { listMyRecommendedFriendsQuery } from "components/Profile/YouMayKnowList/queries";

const UserFollowerButtonContainer = ({ userId, onChange = null, refetchQueries: passedRefetchQueries=[], sx = {}, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const currentUserId = currentUser?.authenticatable?.id;
  const isSelf = userId === currentUserId;

  const { loading, data: { getUser: user } = {} } = useQuery(getUser, {
    skip: !currentUserId || isSelf,
    variables: {
      id: currentUserId,
    },
  });

  const refetchQueries = useMemo(() => 
    [
      ...passedRefetchQueries,
      // {
      //   query: listMyRecommendedFriendsQuery
      // },
      {
        query: getUser,
        variables: {
          id: currentUserId,
        },
      },
      {
        query: getUser,
        variables: {
          id: userId,
        },
      },
      {
        query: listUserFollowers,
        variables: {
          userId: userId,
        },
      },
      {
        query: listUserFollowers,
        variables: {
          userId: currentUserId,
        },
      },
      {
        query: listUserFollowing,
        variables: {
          userId: userId,
        },
      },
      {
        query: listUserFollowing,
        variables: {
          userId: currentUserId,
        },
      },
    ]
  , [currentUserId, userId])

  const userFollower = user?.followers?.find(f => f.followingId === userId);
  
  const [create] = useMutation(createUserFollower, {
    refetchQueries,
    variables: {
      input: {
        userId
      }
    }
  });

  const [destroy] = useMutation(deleteUserFollower, {
    refetchQueries,
    variables: {
      input: {
        id: userFollower?.id
      }
    }
  });

  const handleMutate = useCallback(mutation => 
    Promise.all([
      setIsLoading(true),
      mutation()
    ])
      .then(() =>
        !!onChange && onChange()
      )
      .catch(console.error)
      .finally(() => 
        setIsLoading(false)
      )
  , [onChange])

  const handleFollow = useCallback(() =>
    currentUser ? handleMutate(create) : setLoginOpen(true)
  , [create, handleMutate])

  const handleUnfollow = useCallback(() =>
    handleMutate(destroy)
  , [destroy, handleMutate])

  
  return !!isSelf ? null : (
    <UserFollowerButtonView
      isDisabled={loading || isLoading}
      isFollowing={!!userFollower}
      onFollow={handleFollow}
      onUnfollow={handleUnfollow}
      sx={sx}
      loginOpen={loginOpen}
      handleLoginClose={() => setLoginOpen(false)}
      redirectTo={"/"}
      {...rest}
    />
  );
};

export default UserFollowerButtonContainer;
