import Cropper from "react-cropper";

import "cropperjs/dist/cropper.css";
import "./ImageEditorStyles.css";

const ImageEditorView = ({ imageSrc, cropper, onCropEnd }) => (
  <Cropper
    autoCropArea={1}
    style={{ width: "80%", height: "600px" }}
    responsive={false}
    restore={false}
    ref={cropper}
    src={imageSrc}
    // aspectRatio={16 / 9}
    cropend={onCropEnd}
    crossOrigin="anonymous"
    dragMode="none"
    movable={false}
    scalable={false}
    zoomOnWheel={true}
  />
);

export default ImageEditorView;
