import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";

const CardSearchItemView = ({ card, onSelectCard, showThumbnails }) => (
  <>
    <ListItem alignItems="flex-start">
      <ListItemButton component="a" onClick={onSelectCard.bind(null, card)}>
        {!!card.hasImage && !!showThumbnails && (
          <ListItemAvatar>
            <Avatar
              variant="square"
              alt={card.name}
              src={`https://noxx-images.s3.amazonaws.com/cards/${card.noxxUuid}-front.jpg`}
            />
          </ListItemAvatar>
        )}
        <ListItemText
          secondary={card.name}
          primary={`${card.cardSet?.year ?? ""} - ${
            card.cardSet?.name ?? ""
          } - ${card.cardSet?.variety ?? ""}`}
        />
      </ListItemButton>
    </ListItem>
  </>
);

export default CardSearchItemView;
