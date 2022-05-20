import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import ImageEditorView from "./ImageEditorView";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const ImageEditorContainer = ({ imageSrc, editorRef, dimensions }) => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [width, height] = useWindowSize();
  const [croppedImgSrc, setCroppedImgSrc] = useState("");
  const theme = useTheme();
  const isMobile = window.innerWidth < 600 || window.innerHeight < 600;
  const cropper = useRef();

  const rotate = degrees => [
    cropper.current.cropper.rotate(degrees),
    handleCropChange(),
  ];

  const handleCropChange = () =>
    setCroppedImgSrc(
      cropper.current.cropper.getCroppedCanvas().toDataURL("image/jpeg")
    );

  useEffect(() => {
    const iw = window.innerWidth;
    if (!isMobile)
      cropper.current.cropper.replace(imageSrc);
    else if (Math.abs(iw - currentWidth) > 100) {
      setCurrentWidth(iw);
      cropper.current.cropper.replace(imageSrc);
    }
  }, [imageSrc, width, height]);

  editorRef.current = {
    rotate,
    save: () =>
      new Promise(resolve =>
        cropper.current.cropper.getCroppedCanvas().toBlob(resolve)
      ).then(
        blob =>
          new File([blob], "fileName.jpg", {
            type: "image/jpeg",
            lastModified: new Date(),
          })
      ),
    // save: fetch(previewCanvasRef.current.toDataURL("image/jpeg"))
    //   .then(response => response.blob())
    //   .then(blob =>
    //     new File([blob], 'fileName.jpg', {type: "image/jpeg", lastModified: new Date()})
    //   )
  };

  return (
    <ImageEditorView
      imageSrc={imageSrc}
      cropper={cropper}
      onCropEnd={handleCropChange}
    />
  );
};

export default ImageEditorContainer;
