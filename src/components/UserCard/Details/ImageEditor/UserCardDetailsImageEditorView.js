import "react-image-crop/dist/ReactCrop.css";

import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/system";
import ImageCropper from "components/ImageCropper";
import ImageEditor from "components/ImageEditor";
import LoadingGif from "assets/images/loading3.gif";
import UserCardDetailsImageEditorSpeedDial from "./SpeedDial";
import emptyCardImage from "assets/images/empty-card-image.png";

const UserCardDetailsImageEditorView = ({
  type,
  userCard,
  userCardImage,
  onFrontClick,
  onBackClick,
  view,
  cropperRef,
  onSave,
  onRotateClick,
  onUploadClick,
  onImageLoad,
  dimensions,
  loading,
}) => (
  <>
    <Backdrop
      sx={{
        color: "#fff",
        background: "rgba(0,0,0,0.2)",
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
      open={loading}
    >
      <img src={LoadingGif} style={{ height: 100 }} alt="loading" />
    </Backdrop>
    <Box
      sx={{
        flex: 1,
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <UserCardDetailsImageEditorSpeedDial
        userCard={userCard}
        view={view}
        onRotateClick={onRotateClick}
        onSave={onSave}
        onFrontClick={onFrontClick}
        onBackClick={onBackClick}
        userCardImage={userCardImage}
        onUploadClick={onUploadClick}
      />
      <Box
        sx={{
          margin: "auto",
          width: "100%",
        }}
        // sx={!dimensions ? null : {
        //   backgroundColor: "pink",
        //   margin: "auto",
        //   width: {
        //     xs: "100%",
        //     md: 300,
        //     lg: 400,
        //     xl: 500
        //   }
        // }}
      >
        <Box
          sx={{
            m: {
              md: type === "add" ? 1 : 1,
              xs: 1,
            },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!!userCardImage ? (
            <ImageEditor
              imageSrc={`${userCardImage.imageUrl}`}
              editorRef={cropperRef}
              dimensions={dimensions}
            />
          ) : // <ImageCropper dimensions={dimensions} cropperRef={cropperRef} imageSrc={`${userCardImage.imageUrl}`} onImageLoad={onImageLoad} />
          //<img alt={userCard.playerName} style={{width: "100%", height: "auto"}} src={`${userCardImage.imageUrl}`} />
          !!userCard.card?.frontUrl && view === "front" ? (
            <img
              alt={userCard.playerName}
              style={{ height: "auto", maxHeight: "600px", maxWidth: "90%" }}
              src={userCard.card?.frontUrl}
            />
          ) : (
            <img
              alt="empty"
              style={{ width: "100%", height: "auto" }}
              src={emptyCardImage}
            />
          )}
        </Box>
      </Box>
      {/* <Box>
      <UserCardImageUploadButton 
        disabled={view === 'front' && !!userCard.card && !!userCard.certNumber}
        view={view} 
        userCardId={userCard.id} 
        currentUserCardImageId={userCardImage?.id} 
      />
      {!!userCardImage &&
        <Fab onClick={onRotateClick}>
          <Rotate90DegreesCcwIcon />
        </Fab>
      }
      {!!userCardImage &&
        <Fab onClick={onSave}>
          <SaveIcon />
        </Fab>
      }
      <Fab onClick={onFrontClick} disabled={view === 'front'}>
        <CameraFrontIcon />
      </Fab>
      <Fab onClick={onBackClick} disabled={view === 'back'}>
        <FlipToBackIcon />
      </Fab>
    </Box> */}
    </Box>
  </>
);

export default UserCardDetailsImageEditorView;
