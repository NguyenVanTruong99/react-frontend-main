import { ListItem, ListItemButton, Box } from "@mui/material";

import CardBasicDetail from "components/Card/BasicDetail";

const SearchPanelCardResultView = ({
  cardFrontImageUrl,
  cardId,
  cardName,
  cardNumber,
  cardSetName,
  cardSetVariety,
  cardSetYear,
  grade,
  gradeVendor,
  handleClick,
  onSelect,
  user,
  type,
}) => {
  return (
    <ListItem sx={{ px: 0 }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <ListItemButton
          component="a"
          onClick={
            !!onSelect
              ? onSelect.bind(null, cardId)
              : e => handleClick(e, type === "Card" ? `/cards/${cardId}` : `/collectors-cards/${cardId}`)
          }
        >
          <CardBasicDetail
            cardFrontImageUrl={cardFrontImageUrl}
            cardName={cardName}
            cardNumber={cardNumber}
            cardSetName={cardSetName}
            cardSetVariety={cardSetVariety}
            cardSetYear={cardSetYear}
          />
        </ListItemButton>
        {
          type === "UserCard" &&
          <ListItemButton
            component="a"
            onClick={
              !!onSelect
                ? onSelect.bind(null, cardId)
                : e => handleClick(e, `/users/${user.id}`)
            }
            sx = {{ width: "100px", maxWidth: "100px", height: "100px", padding: 0 }}
          >
            <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ height: "100px", width: "100px", overflow: "hidden", margin: "0" }}>

            </Box>
              

            </Box>
          </ListItemButton>
        }
      </Box>
    </ListItem>
  )
};

export default SearchPanelCardResultView;
