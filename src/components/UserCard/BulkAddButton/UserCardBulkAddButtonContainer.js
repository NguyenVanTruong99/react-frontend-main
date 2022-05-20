import { useCallback, useState, useContext } from "react";

import { StagedUserCardsContext } from "contexts/StagedUserCards";
import UserCardBulkAddButtonView from "./UserCardBulkAddButtonView";
import ModalPrompt from "components/ModalPrompt";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { updateUserCard } from "components/UserCard/mutations";
import { useApolloClient } from "@apollo/client";
import { useConfirm } from "material-ui-confirm";
import { useNavigate } from "react-router";

const UserCardBulkAddButtonContainer = ({ userCards, handleAddBulkOpen }) => {
  const { removeUserCard } = useContext(StagedUserCardsContext);
  const navigate = useNavigate();
  const confirm = useConfirm();
  const client = useApolloClient();

  const handleClick = useCallback(
    () =>
      Promise.all(
        userCards
          .filter(uc => !!uc.cardId)
          .map(userCard =>
            client
              .mutate({
                mutation: updateUserCard,
                variables: {
                  input: {
                    id: userCard.id,
                    isStaged: false,
                    isPublic: true,
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
              })
              .then(() => {
                removeUserCard(userCard);
              })
          )
      ).then(handleAddBulkOpen()),
    [client, userCards, removeUserCard, handleAddBulkOpen]
  );

  return (
    <UserCardBulkAddButtonView
      onClick={handleClick}
      count={userCards.filter(uc => !!uc.cardId).length}
    />
  );
};

export default UserCardBulkAddButtonContainer;
