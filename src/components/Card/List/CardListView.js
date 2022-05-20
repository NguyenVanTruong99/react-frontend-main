/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import CardListItem from "./Item";
import List from "@mui/material/List";
import { Box } from "@mui/system";
import CardListStyles from "./CardListStyles";

const CardListView = ({ cards }) => (
  <>
    <Box
      sx={{
        display: "flex",
      }}
    >
      <caption css={CardListStyles.caption}>Hi there!</caption>
    </Box>
    <List>
      {cards.map(card => (
        <CardListItem key={card.id} card={card} />
      ))}
    </List>
  </>
);

export default CardListView;
