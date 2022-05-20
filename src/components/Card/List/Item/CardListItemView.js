import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemAvatar, Avatar, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CardListItemView = ({ card, userCard, onClick, ItemInner, onRemove }) => (
  <>
    <ListItem
      secondaryAction={
        !onRemove ? null : (
          <IconButton edge="end" aria-label="delete" onClick={onRemove}>
            <DeleteIcon />
          </IconButton>
        )
      }
    >
      <ItemInner onClick={!!onClick ? onClick.bind(null, userCard) : undefined}>
        {!!userCard?.userCardImages?.[0]?.imageUrl ? (
          <ListItemAvatar>
            <Avatar
              variant="square"
              alt={card.name}
              src={`${userCard.userCardImages[0]?.imageUrl}`}
            />
          </ListItemAvatar>
        ) : card?.hasImage ? (
          <ListItemAvatar>
            <Avatar
              variant="square"
              alt={card.name}
              src={`https://noxx-images.s3.amazonaws.com/cards/${card.noxxUuid}-front.jpg`}
            />
          </ListItemAvatar>
        ) : null}
        <ListItemText
          secondary={card.name}
          primary={`${card.cardSet.year} - ${card.cardSet.name} - ${
            card.cardSet.variety ?? ""
          }`}
        />
      </ItemInner>
    </ListItem>
  </>
);

export default CardListItemView;
