import UserCardEditVisibilitySwitchView from "./UserCardEditVisibilitySwitchView";
import { getUserCard } from "components/UserCard/queries";
import { updateUserCard } from "components/UserCard/mutations";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";

const UserCardEditVisibilitySwitchContainer = ({ userCard }) => {
  const isPublic = userCard?.isPublic;
  const userCardId = userCard?.id;

  const [toggle] = useMutation(updateUserCard, {
    variables: {
      input: {
        id: userCard?.id,
      },
    },
    optimisticResponse: {
      __typename: "Mutation",
      updateUserCard: {
        ...userCard,
        isPublic: !isPublic,
        __typename: "UserCard",
      },
    },
    refetchQueries: [
      {
        query: getUserCard,
        variables: {
          id: userCard?.id,
        },
      },
    ],
  });

  const handleChange = useCallback(
    () =>
      toggle({
        variables: {
          input: {
            id: userCardId,
            isPublic: !isPublic,
          },
        },
      }),
    [isPublic, toggle, userCardId]
  );

  return (
    <UserCardEditVisibilitySwitchView
      userCard={userCard}
      onChange={handleChange}
    />
  );
};

export default UserCardEditVisibilitySwitchContainer;
