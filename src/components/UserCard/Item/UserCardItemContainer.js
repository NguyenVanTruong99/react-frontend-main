import { useCallback } from "react";
import UserCardItemView from "./UserCardItemView";
import { useMutation } from "@apollo/client";
import { deleteUserCard } from "../mutations";
import { listMyStagedUserCards } from "../queries";

const UserCardItemContainer = ({ userCard, onRemove }) => {
  const [deleteItem] = useMutation(deleteUserCard, {
    variables: {
      input: {
        id: userCard.id,
      },
    },
  });
  const handleRemove = useCallback(
    () =>
      deleteItem({
        variables: {
          input: {
            id: userCard.id,
          },
        },
        refetchQueries: [
          {
            query: listMyStagedUserCards,
            variables: {
              offsetAttributes: {
                limit: 100,
              },
            },
          },
        ],
      }).then(({ data: { deleteUserCard } }) => onRemove(deleteUserCard)),

    [onRemove, deleteItem, userCard]
  );

  return <UserCardItemView userCard={userCard} onRemove={handleRemove} />;
};

export default UserCardItemContainer;
