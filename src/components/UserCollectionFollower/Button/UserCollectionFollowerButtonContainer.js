import {
  createUserCollectionFollower,
  deleteUserCollectionFollower,
} from "../mutations";
import { useCallback, useMemo, useRef, useState } from "react";

import ModalPrompt from "components/ModalPrompt";
import UserCollectionFollowerButtonView from "./UserCollectionFollowerButtonView";
import { getUserCollection } from "components/UserCollection/queries";
import { useMutation } from "@apollo/client";

const UserCollectionFollowerButtonContainer = ({
  userCollectionId,
  isFollowing,
  screenSize,
  inList = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [unfollowOpen, setUnfollowOpen] = useState(false);
  const handleUnfollowOpen = useCallback(() => setUnfollowOpen(true), []);
  const handleUnfollowClose = useCallback(() => setUnfollowOpen(false), []);
  const refetchQueries = useRef([
    {
      query: getUserCollection,
      variables: {
        id: userCollectionId,
      },
    },
  ]);
  const [create] = useMutation(createUserCollectionFollower, {
    variables: {
      input: {
        userCollectionId,
      },
    },
    refetchQueries: refetchQueries.current,
  });

  const [destroy] = useMutation(deleteUserCollectionFollower, {
    variables: {
      input: {
        userCollectionId,
      },
    },
    refetchQueries: refetchQueries.current,
  });

  const mutate = useMemo(
    () => (!isFollowing ? create : destroy),
    [create, destroy, isFollowing]
  );

  const handleMutate = useCallback(
    () =>
      Promise.all([
        setIsLoading(true),
        mutate()
          .catch(console.error)
          .then(() => setIsLoading(false))
          .then(() => handleUnfollowClose()),
      ]),
    [mutate, handleUnfollowClose]
  );

  const handleOpenModal = useCallback(() => {
    if (isFollowing) {
      handleUnfollowOpen();
    } else {
      handleMutate();
    }
  }, [isFollowing, handleUnfollowOpen, handleMutate]);

  return (
    <>
      <UserCollectionFollowerButtonView
        isFollowing={isFollowing}
        onClick={handleOpenModal}
        isLoading={isLoading}
        screenSize={screenSize}
        inList={inList}
      />
      <ModalPrompt
        open={!!unfollowOpen}
        promptMessage="Are you sure you want to unfollow?"
        closeMessage="No"
        actionMessage="Yes"
        handleClose={handleUnfollowClose}
        handleAction={handleMutate}
      />
    </>
  );
};

export default UserCollectionFollowerButtonContainer;
