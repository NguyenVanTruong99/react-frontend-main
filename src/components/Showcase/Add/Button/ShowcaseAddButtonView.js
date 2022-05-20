import { Button, Modal } from "@mui/material";
import { Box } from "@mui/material";
import ShowcaseForm from "components/Showcase/Form";
import ShowcaseCardAddModal from "components/Showcase/Card/AddModal";

const ShowcaseAddButtonView = ({
  setAddShowcaseModalOpen,
  addShowcaseModalOpen,
  setCardModalOpen,
  cardModalOpen,
  onCreate,
  userCollectionId,
}) => (
  <>
    <Button
      onClick={setAddShowcaseModalOpen.bind(null, true)}
      sx={{
        width: {
          xs: "100%",
          md: "auto",
        },
      }}
      variant="outlined"
    >
      Add Showcase
    </Button>

    <Modal
      open={addShowcaseModalOpen}
      // onClick={setAddShowcaseModalOpen.bind(null, false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "100%",
            md: 600,
          },
          height: {
            xs: "100%",
            md: "auto",
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "8px",
          border: "1px solid #9e9e9e",
          p: 0,
        }}
      >
        <ShowcaseForm
          onSuccess={onCreate}
          onCancel={setAddShowcaseModalOpen.bind(null, false)}
          mode={"add"}
        />
      </Box>
    </Modal>
    <ShowcaseCardAddModal
      setCardModalOpen={setCardModalOpen}
      cardModalOpen={cardModalOpen}
      userCollectionId={userCollectionId}
    />
  </>
);

export default ShowcaseAddButtonView;
