import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/material";
import UserCardSearch from "components/UserCard/Search";
import ShowcaseSearchResults from "components/Showcase/SearchResults";
import BgPattern from "assets/images/Bg-med-pattern.png";
import ShowcaseIcon from "assets/images/icons/showcase.png";

const ShowcaseCardAddModalView = ({
  setCardModalOpen,
  cardModalOpen,
  isSaving,
  items,
  setItems,
  onSave,
  onSelectUserCard,
  selectedUserCards,
  onRemoveUserCard,
  searchRef,
}) => (
  <Modal open={cardModalOpen} onClick={e => e.stopPropagation()}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: {
          xs: "100%",
          md: 600,
        },
        height: {
          xs: "100%",
          md: "95%",
        },
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 0,
      }}
    >
      <Box sx={{ width: "100%", position: "relative", maxHeight: "134px" }}>
        <img src={BgPattern} style={{ width: "100%", height: "100%" }} alt="" />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={ShowcaseIcon} style={{ height: "40px" }} alt="" />
        </Box>
      </Box>

      <Box
        sx={{
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
          mx: -2,
          mt: 2,
          mb: 2,
          px: 2,
          pt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            sx={{ width: "100%", textAlign: "center", p: 0 }}
          >
            Add cards to this Showcase
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          p: 2,
          height: "calc(100vh - 345px)",
          zIndex: -1,
        }}
      >
        <UserCardSearch
          searchRef={searchRef}
          onItems={setItems}
          placeholder="Search for a card in your collection"
        />
        <ShowcaseSearchResults
          onBottomReached={() => searchRef?.current?.fetchMore()}
          items={items}
          onSelectUserCard={onSelectUserCard}
          selectedUserCards={selectedUserCards}
          onRemoveUserCard={onRemoveUserCard}
        />
      </Box>
      <Box
        sx={{
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mx: 0,
          mb: 2,
          p: 2,
          border: "16px solid white",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 0,
            mb: { md: 0, xs: "36px" },
          }}
        >
          <Button
            onClick={event => [
              event.stopPropagation(),
              setCardModalOpen(false),
            ]}
            variant="outlined"
          >
            Add Cards Later
          </Button>

          <Button
            disabled={!selectedUserCards.length || !!isSaving}
            onClick={onSave}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  </Modal>
);

export default ShowcaseCardAddModalView;
