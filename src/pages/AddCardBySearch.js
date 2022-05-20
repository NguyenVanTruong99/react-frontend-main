import { Button, IconButton } from "@mui/material";
import { createUserCard, deleteUserCard } from "components/UserCard/mutations";
import { useCallback, useContext, useState } from "react";

import { Box } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
import CardSearch from "components/Card/Search";
import { StagedUserCardsContext } from "contexts/StagedUserCards";
import { USER_CARD_TABLE_COLS } from "constants/cards";
import UserCardTable from "components/UserCard/Table";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { useMutation } from "@apollo/client";
// import List from '@mui/material/List';
// import UserCardItem from "components/UserCard/Item"
import { useNavigate } from "react-router";

const AddCardBySearch = ({ onCancel }) => {
  const navigate = useNavigate();
  const { addUserCard, userCards, removeUserCard, clearUserCards } = useContext(
    StagedUserCardsContext
  );
  const [term, setTerm] = useState("");
  const [create] = useMutation(createUserCard, {
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
  });

  const handleCardSelect = useCallback(
    cardId => [
      create({
        variables: {
          input: {
            cardId,
            isStaged: true,
          },
        },
      })
        .then(({ data: { createUserCard: userCard } }) => userCard)
        .then(addUserCard),
    ],
    [addUserCard, create]
  );

  const handleContinueClick = useCallback(
    () => [clearUserCards(), navigate("/add-cards"), onCancel()],
    [navigate, clearUserCards, onCancel]
  );

  const [deleteItem] = useMutation(deleteUserCard, {
    variables: {
      input: {
        id: "",
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
  });

  const handleCancel = useCallback(
    () => [
      Promise.all(
        userCards.map(uc =>
          deleteItem({
            variables: {
              input: {
                id: uc.id,
              },
            },
          })
        )
      ).then(() => [clearUserCards(), onCancel()]),
    ],
    [onCancel, clearUserCards, userCards, deleteItem]
  );

  const onType = term => {
    setTerm(term);
  };

  const cardTableColumns = [
    { title: "Name", field: "name" },
    USER_CARD_TABLE_COLS.DETAILS,
    USER_CARD_TABLE_COLS.PLAYER,
    USER_CARD_TABLE_COLS.SPORT,
    USER_CARD_TABLE_COLS.YEAR,
    USER_CARD_TABLE_COLS.SET,
    USER_CARD_TABLE_COLS.VARIETY,
    USER_CARD_TABLE_COLS.NUMBER,
    USER_CARD_TABLE_COLS.CREATED_AT,
  ];

  return (
    <>
      <Box
        sx={{
          p: 4,
          height: {
            md: term || !!userCards.length ? "650px" : "auto",
            xs: term || !!userCards.length ? "550px" : "auto",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            mt: 3,
          }}
        >
          <CardSearch onSelectCard={handleCardSelect} onType={onType} />
        </Box>
        {!!userCards.length && (
          <Box
            py={2}
            sx={{ position: "absolute", left: 0, width: "100%", height: "62%" }}
          >
            <UserCardTable
              columns={cardTableColumns}
              RowActionComponent={({ item }) => (
                <IconButton onClick={removeUserCard.bind(null, item.userCard)}>
                  <CancelIcon />
                </IconButton>
              )}
              sortable={false}
              showCount={false}
              showPagination={false}
              showRowActions={false}
              showTitle={false}
              showToolbar={false}
              TableProps={{ size: "small" }}
              title={null}
              userCards={userCards}
            />
          </Box>
        )}
        {/* <List>
            {
              userCards.map(userCard => 
                <UserCardItem key={userCard.id} userCard={userCard} onRemove={removeUserCard} />
              )
            }
          </List> */}
        {/* </Box> */}
      </Box>
      <Box
        sx={{
          position: "sticky",
          width: "100%",
          bottom: 0,
          backgroundColor: theme => `${theme.palette.background.paper}`,
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mt: 4,
          mb: -4,
          // mx: -4,
          py: 2,
          px: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={!userCards.length}
          onClick={handleContinueClick}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default AddCardBySearch;
