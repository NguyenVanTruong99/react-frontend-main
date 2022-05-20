import { Button, IconButton, Typography } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import { Box } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
import CardAddCertificationNumber from "components/Card/Add/CertificationNumber";
import { StagedUserCardsContext } from "contexts/StagedUserCards";
import { USER_CARD_TABLE_COLS } from "constants/cards";
// import List from '@mui/material/List';
// import UserCardItem from "components/UserCard/Item"
import UserCardTable from "components/UserCard/Table";
import { deleteUserCard } from "components/UserCard/mutations";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";

const AddCardByCertificationNumber = ({ onCancel }) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { addUserCard, userCards, removeUserCard, clearUserCards } = useContext(
    StagedUserCardsContext
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleSubmit = useCallback(
    userCard => [setError(null), addUserCard(userCard)],
    [addUserCard]
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

  const handleContinueClick = useCallback(
    () => [clearUserCards(), navigate("/add-cards"), onCancel()],
    [navigate, clearUserCards, onCancel]
  );

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

  const cardTableColumns = isMobile
    ? [USER_CARD_TABLE_COLS.DETAILS, USER_CARD_TABLE_COLS.GRADE]
    : [
        USER_CARD_TABLE_COLS.DETAILS,
        USER_CARD_TABLE_COLS.GRADE,
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
      <Box sx={{ p: 4 }}>
        <CardAddCertificationNumber
          onSubmit={handleSubmit}
          onError={setError}
        />
        {!!error && <Typography color="error.main">{error}</Typography>}
        {!userCards.length && (
          <Typography pt={5} pb={12} px={1} align="center" variant="addGreySm">
            Add new cards by selecting the Grading service and entering the
            certification number found on your card. We'll auomatically retrieve
            the card for you and populate its information.
          </Typography>
        )}
        {!!userCards.length && (
          <Box sx={{ maxHeight: 370, overflow: "scroll" }}>
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
          Add to Queue
        </Button>
      </Box>
    </>
  );
};

export default AddCardByCertificationNumber;
