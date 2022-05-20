import { Avatar, Box, IconButton, Typography } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ImageCropper from "components/ImageCropper";
import Modal from "components/Modal";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const EditAvatarView = ({
  isModalOpen,
  onToggleModal,
  onUploadRequested,
  onSaveImage,
  selectedImage,
  crop,
  cropperRef,
  theme,
}) => (
  <Avatar
    sx={{
      background: theme.palette.background.white,
      color: theme.palette.blue.main,
      border: 1,
      borderColor: theme.palette.grey.B900,
      zIndex: 5,
    }}
  >
    <IconButton onClick={onToggleModal}>
      <EditOutlinedIcon variant="outlined" color="primary" />
    </IconButton>
    <Modal
      actionLabel="Save"
      title="Upload Profile Image"
      isOpen={isModalOpen}
      handleAction={onSaveImage}
      handleClose={onToggleModal}
      handleCancel={onToggleModal}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedImage ? (
            <Box>
              <ImageCropper
                cropperRef={cropperRef}
                crop={crop}
                imageSrc={URL.createObjectURL(selectedImage)}
                initialCrop={crop}
                onImageLoad={image => console.log(image)}
              />
            </Box>
          ) : (
            <Box
              sx={{
                clipPath:
                  "polygon(0 0, 75% 0%, 100% 25%, 100% 100%, 25% 100%, 0 75%)",
                border: 1,
                borderRadius: 1,
                borderColor: theme.palette.grey.B200,
                width: "150px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={onUploadRequested}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="cardDetailXs" sx={{ mb: 1 }}>
                    Browse files...
                  </Typography>
                  <PhotoCameraIcon />
                </Box>
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  </Avatar>
);

export default EditAvatarView;
