import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CardListItem from "components/Card/List/Item";

const UserCardItemView = ({ userCard, onRemove }) => (
  <>
    {!!userCard.card && (
      <CardListItem card={userCard.card} onRemove={onRemove} />
    )}
    {!userCard.card && (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={onRemove}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary={userCard.certNumber}
          secondary="Card Not Found"
        />
      </ListItem>
    )}
  </>
);

export default UserCardItemView;
