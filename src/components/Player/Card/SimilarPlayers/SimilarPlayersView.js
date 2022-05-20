import { Box, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styles from "./SimilarPlayersStyles";

function similarPlayerSubHeading(player) {
  let subHeading = [];
  if (player.team) {
    subHeading.push(`${player.team.location} ${player.team.nickname}`);
  } else if (player.status === "RET") {
    subHeading.push(`Retired`);
  } else {
    subHeading.push(`Free Agent`);
  }

  if (player.position) {
    subHeading.push(`${player.position.name}`);
  }

  return subHeading.join(" - ");
}

const SimilarPlayerView = ({ players }) => (
  <>
    {players.map((player, i) => (
      <Box sx={styles.playerDetailRoot.relatedItems.similarPlayers}>
        {[0, 1, 2].map((x, i) => (
          <Card
            sx={styles.playerDetailRoot.relatedItems.similarPlayers.card}
            key={i}
          >
            <CardMedia
              component="img"
              sx={
                styles.playerDetailRoot.relatedItems.similarPlayers.card
                  .playerImage
              }
              image={player.headshotUrl}
            />
            <Box
              sx={
                styles.playerDetailRoot.relatedItems.similarPlayers.card
                  .playerMeta
              }
            >
              <Box
                sx={
                  styles.playerDetailRoot.relatedItems.similarPlayers.card
                    .playerMeta.name
                }
              >
                {player.fullName}
              </Box>
              <Box
                sx={
                  styles.playerDetailRoot.relatedItems.similarPlayers.card
                    .playerMeta.sub
                }
              >
                {similarPlayerSubHeading(player)}
              </Box>
            </Box>

            <Box
              sx={
                styles.playerDetailRoot.relatedItems.similarPlayers.card
                  .stats
              }
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "12px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "#b6b6b6",
                }}
              >
                Career Avg
              </p>

              <Box
                sx={
                  styles.playerDetailRoot.relatedItems.similarPlayers.card
                    .stats.labels
                }
              >
                {["PTS", "AST", "REB"].map((x, i) => (
                  <Box
                    sx={{
                      flex: "1",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#b6b6b6",
                    }}
                    key={i}
                  >
                    {x}
                  </Box>
                ))}
              </Box>

              <Box
                sx={
                  styles.playerDetailRoot.relatedItems.similarPlayers.card
                    .stats.values
                }
              >
                {["23.1", "11.2", "5.3"].map((x, i) => (
                  <Box
                    sx={{
                      flex: "1",
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                    key={i}
                  >
                    {x}
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    ))}
  </>
);

export default SimilarPlayerView;
