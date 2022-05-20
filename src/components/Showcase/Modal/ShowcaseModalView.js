import { Button, Typography } from "@mui/material";

import AddToHomeScreenIcon from "assets/images/icons/add-card.svg";
import BgPattern from "assets/images/Bg-med-pattern.png";
import { Box } from "@mui/system";
import Modal from "components/Modal";
import ShowcaseIcon from "assets/images/icons/showcase.png";
import ShowcaseTable from "components/Showcase/Table";
import styles from "./ShowcaseModalStyles";

const ShowcaseModalView = ({
  handleSelectedShowcasesChanged,
  initialSelectedShowcases,
  isOpen,
  isShowcasesLoading,
  onAction,
  onClose,
  showcases,
}) => (
  <Modal
    actionLabel="Save"
    cancelLabel="Cancel"
    hideCloseButton={true}
    handleAction={onAction}
    handleClose={onClose}
    handleCancel={onClose}
    isOpen={isOpen}
    open={isOpen}
    onClose={onClose}
    title="Add Cards to Showcase"
    headerImage={BgPattern}
    headerImageHeight="134px"
  >
    <Box sx={{ width: "100%", position: "relative", top: "-158px" }}>
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
    <ShowcaseTable
      handleSelectedShowcasesChanged={handleSelectedShowcasesChanged}
      initialSelectedShowcases={initialSelectedShowcases}
      isLoading={isShowcasesLoading}
      lockIfInitialSelected={true}
      selectable={true}
      showcases={showcases}
    />
  </Modal>
);

export default ShowcaseModalView;
