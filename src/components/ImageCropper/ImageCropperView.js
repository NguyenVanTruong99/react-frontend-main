import ReactCrop from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";
import "./ImageCropperStyles.css";

const ImageCropperView = ({
  onLoad,
  crop,
  setCrop,
  setCompletedCrop,
  imageSrc,
  previewCanvasRef,
  completedCrop,
  degrees,
  rotate,
  dimensions,
}) => (
  <>
    <ReactCrop
      crossorigin="anonymous"
      className={"cropWrap"}
      src={imageSrc}
      scale={1}
      ruleOfThirds
      // maxHeight={dimensions}
      // maxWidth={dimensions}
      // imageStyle={!dimensions ? null : {
      //   maxHeight: dimensions
      // }}
      minWidth={160}
      minHeight={160}
      // maxWidth={680}
      onImageLoaded={onLoad}
      crop={crop}
      onChange={setCrop}
      onComplete={setCompletedCrop}
      // rotate={degrees}
      // spin={degrees}
    />
    <div style={{ display: "none" }}>
      <canvas
        ref={previewCanvasRef}
        style={{
          width: Math.round(
            !!rotate ? completedCrop.height : completedCrop.width
          ),
          height: Math.round(
            !!rotate ? completedCrop.width : completedCrop.height
          ),
        }}
      />
    </div>
  </>
);

export default ImageCropperView;
