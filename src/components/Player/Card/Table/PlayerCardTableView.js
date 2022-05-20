import { Avatar, Box, Typography } from "@mui/material";
import { CARD_TABLE_COLS } from "constants/cards";
import CardTable from "components/Card/Table";
import PlayerAvatar from "components/Player/Avatar";
import styles from "./PlayerCardTableStyles";

//function to format number with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const PlayerCardTableView = ({
  handleOnResults,
  player,
  showCheckBoxes,
  resultCount,
  plain,
}) =>
  plain ? (
    <CardTable
      initialFilters={{ playerId: [player.id] }}
      onResults={handleOnResults}
      showCheckBoxes={showCheckBoxes}
      TableProps={{
        sx: {
          borderTop: 0,
          borderBottom: 0,
          borderRadius: 2,
        },
      }}
      term="*"
    />
  ) : (
    <Box sx={styles.backgroundTop}>
      <Box sx={styles.top}>
        <Box sx={styles.headerTextContainer}>
          <Typography variant="h6" sx={styles.headerText.name}>
            {player.fullName}
          </Typography>
          <Typography variant="h6" sx={styles.headerText}>
            <Box component="span" sx={styles.cardCountText}>
              {numberWithCommas(resultCount)}
            </Box>{" "}
            Cards in NoXX Catalog
          </Typography>
        </Box>
        <Box sx={styles.imageContainer}>
          {player.headshotUrl && <img src={player.headshotUrl} alt="" />}
        </Box>
      </Box>
      <Box sx={styles.backgroundMiddle}>
        <CardTable
          initialFilters={{ playerId: [player.id] }}
          onResults={handleOnResults}
          showCheckBoxes={showCheckBoxes}
          TableProps={{
            sx: {
              borderTop: 0,
              borderBottom: 0,
              borderRadius: 2,
              // maxWidth: 1200,
              margin: "0 auto",
            },
          }}
          term="*"
          columns={[
            CARD_TABLE_COLS.DETAILS,
            CARD_TABLE_COLS.YEAR,
            CARD_TABLE_COLS.MANUFACTURER,
            CARD_TABLE_COLS.SET,
            CARD_TABLE_COLS.PARALLEL,
            CARD_TABLE_COLS.CARD_NUM,
            CARD_TABLE_COLS.TOTAL_GRADED,
            CARD_TABLE_COLS.ACTIONS,
          ]}
        />
      </Box>
      <Box sx={styles.backgroundBottom}></Box>
    </Box>
  );

export default PlayerCardTableView;
