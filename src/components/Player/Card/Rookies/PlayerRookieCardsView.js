import { Box, Link, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import addCommas from "utils/addCommas";
import styles from "./PlayerRookieCardsStyles";

const PlayerRookieCardsView = ({ cards, handleCardClick }) => (
  <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-around', maxWidth: '100vw' }}>
    {cards.map((card, i) => (
      <Card
        sx={{ display: "flex", mb: 1, border: "1px solid #dfe0eb", width: '100%', mr: 2, cursor: 'pointer', textDecoration: 'none' }}
        component={Link}
        href={`/cards/${card.id}`}
        key={card.id}
      >
        <CardMedia
          component="img"
          sx={{ width: "auto", height: "180px" }}
          image={card.imageUrl}
        />
        <Box
          sx={{ flex: 1, display: "flex", flexDirection: "column", padding: 0 }}
        >
          <Box sx={{ flex: "1 0 auto", padding: "0px 0px 0px 8px" }}>
            <p
              style={{
                margin: "0",
                paddingTop: "16px",
                fontSize: "14px",
                color: "#777",
              }}
            >
              {card.year}
            </p>
            {/* <p style={{ margin: "0", fontSize: "18px", fontWeight: "bold" }}>
              {card.name}
            </p> */}
            <p style={{ margin: "0", fontSize: "18px" }}>{card.desc}</p>
            <p style={{ margin: "0", fontSize: "18px" }}>{card.set}</p>
            <Box>
              <Box sx={{
                margin: "0",
                pt: "4px",
                fontSize: "14px",
                color: "#777",
              }}>Total Sales: {addCommas(card.totalSales)}</Box>
              <Box sx={{
                margin: "0",
                paddingBottom: "4px",
                fontSize: "14px",
                color: "#777",
              }}>Total Graded: {addCommas(card.totalGraded)}</Box>
            </Box>

            <p
              style={{
                margin: "0",
                paddingBottom: "4px",
                fontSize: "14px",
                color: "#777",
              }}
            >
              #{card.number}
            </p>
          </Box>
        </Box>
      </Card>
    ))}
  </Box>
);

export default PlayerRookieCardsView;
