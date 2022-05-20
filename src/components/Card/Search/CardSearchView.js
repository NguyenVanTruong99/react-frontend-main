import {
  IconButton,
  InputAdornment,
  InputBase,
  List,
  TextField,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
// import CardSearchItem from "./Item"
import SearchIcon from "@mui/icons-material/Search";
import SearchPanelCardResult from "components/AppBar/SearchPanel/Result/Card";
import ModalPrompt from "components/ModalPrompt";
import styles from "./CardSearchStyles";

const CardSearchView = ({
  items,
  term,
  onSearchChange,
  onSelectCard,
  addOpen,
  handleAddClose,
  handleAction,
}) => (
  <>
    <TextField
      label={null}
      value={term}
      onChange={e => {
        e.stopPropagation();
        onSearchChange(e.target.value);
      }}
      fullWidth
      sx={{
        backgroundColor: theme => theme.palette.grey.B300,
        borderRadius: "8px",
      }}
      InputLabelProps={{ shrink: false }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: !term ? null : (
          <InputAdornment position="end">
            <IconButton onClick={() => onSearchChange("")}>
              <CancelIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    {items.length > 0 && !!term && (
      <Box sx={styles.resultsWrapper}>
        <List sx={styles.resultsList}>
          {items.map((item, idx) => (
            <SearchPanelCardResult
              key={idx}
              {...item}
              cardId={item.id}
              cardFrontImageUrl={item.card?.frontUrl}
              cardName={item.card?.name}
              cardNumber={item.card?.cardNumber}
              cardSetName={item.card?.cardSet?.name}
              cardSetVariety={item.card?.cardSet?.variety}
              cardSetYear={item.card?.cardSet?.year}
              onSelect={onSelectCard}
            />
          ))}
        </List>
        <ModalPrompt
          open={!!addOpen}
          promptMessage="Are you sure you want to add this card?"
          closeMessage="No"
          actionMessage="Yes"
          handleClose={handleAddClose}
          handleAction={handleAction}
        />
      </Box>
    )}
  </>
);

export default CardSearchView;
