import { useState, useRef, useEffect, useCallback } from "react";
import ImageCropperView from "./ImageCropperView";

const degreeToRadians = degree => (degree ?? 0) * (Math.PI / 180);

const ImageCropperContainer = ({
  imageSrc,
  cropperRef,
  onImageLoad,
  dimensions,
  initialCrop = {
    unit: "%", // px | %
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  },
}) => {
  const initialCompletedCrop = {
    width: 0,
    height: 60,
  };
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState(initialCrop);
  const [completedCrop, setCompletedCrop] = useState(initialCompletedCrop);
  const [degrees, setDegrees] = useState(0);
  const rotate = [90, 270].includes(degrees);

  const onLoad = useCallback(
    img => {
      imgRef.current = img;
      img.crossOrigin = "anonymous";
      !!onImageLoad && onImageLoad(img);

      // if(!loaded && img.height > img.width) {
      // 	console.log("DO IT!!!")
      // 	img.height = img.width;
      // }

      setCrop({
        ...crop,
        width: img.width,
        height: img.height,
      });
    },
    [onImageLoad, crop]
  );

  // const reloadImage = () => {
  // 	imgRef.current.src = `${imgRef.current.src}?t=${new Date().getTime()}`;
  // }

  cropperRef.current = {
    rotate: setDegrees,
    reset: () => [setCrop(initialCrop), setCompletedCrop(initialCompletedCrop)],
    updateImage: () => {
      imgRef.current.src = previewCanvasRef.current.toDataURL("image/jpeg");
    },
    save: () =>
      fetch(previewCanvasRef.current.toDataURL("image/jpeg"))
        .then(response => response.blob())
        .then(
          blob =>
            new File([blob], "fileName.jpg", {
              type: "image/jpeg",
              lastModified: new Date(),
            })
        ),
    // (new Promise(resolve =>
    //   previewCanvasRef.current.toBlob(
    //     blob => {
    //       blob.name = 'fileName.jpg';
    //       resolve(blob);
    //     },
    //     "image/jpeg",
    //     1
    //   )
    // ))
    //   .then(blob =>
    //     new File([blob], 'fileName.jpg', {type: "image/jpeg", lastModified: new Date()})
    //   )
  };

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = rotate ? crop.height * pixelRatio : crop.width * pixelRatio;
    canvas.height = rotate ? crop.width * pixelRatio : crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    // ctx.setTransform(scaleX, 0, 0, scaleY, crop.x, crop.y);
    rotate && ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(degreeToRadians(degrees));

    // if(degrees === 180) {
    // 	ctx.translate(crop.width, 0);
    // 	ctx.scale(-1, 1)
    // } else {
    // 	ctx.translate(0, 0);
    // 	ctx.scale(1, 1)
    // }

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      rotate ? -canvas.height / 2 : 0,
      rotate ? -canvas.width / 2 : 0,
      crop.width,
      crop.height
    );

    // imgRef.current.src = previewCanvasRef.current.toDataURL("image/jpeg");

    // saveCroppedImg(canvas?.toDataURL(), orderId);
  }, [completedCrop, degrees, rotate]);

  return (
    <ImageCropperView
      onLoad={onLoad}
      crop={crop}
      setCrop={setCrop}
      setCompletedCrop={setCompletedCrop}
      imageSrc={imageSrc}
      previewCanvasRef={previewCanvasRef}
      completedCrop={completedCrop}
      degrees={degrees}
      rotate={rotate}
      dimensions={dimensions}
    />
  );
};
export default ImageCropperContainer;
