import React from "react";
import styles from "./imgT.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ChangeField } from "../../../redux/reducers/update";

import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import { generateDownload } from "./utils/cropImage";
// import getCroppedImg from "./utils/cropImage";
import axios from "axios";
export default function ImageTest(handleChange) {
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [fileName,setFileName] = React.useState("")
  const [imgType,setImgType] = React.useState("")

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      setFileName(event.target.files[0].name)
      setImgType(event.target.files[0].type)
    }
  };

  const onDownload = () => {
    const url = generateDownload(image, croppedArea); //crop된 이미지 반환
    return url;
  };
  function blobToFile(theBlob, fileName) {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    // theBlob.type = "image/png";
    return theBlob;
  }

  function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  }
  const dispatch = useDispatch();
  const test = ({ url }) => {
    console.log(url);
    dispatch(
      ChangeField({
        form: "update",
        key: "image",
        value: url,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerCropper}>
        {image ? (
          <>
            <div className={styles.cropper}>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={330 / 141}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                style={{ width: "330px" }}
              />
            </div>

            <div className={styles.slider}>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
          </>
        ) : null}
      </div>

      <div className={styles.containerButtons}>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={triggerFileSelectPopup}
          style={{ marginRight: "10px" }}
        >
          파일 선택
        </Button>
        <button
          color="secondary"
          onClick={async () => {
            const formData = new FormData();
            const testurl = await onDownload();
            // console.log(testurl);
            const file = DataURIToBlob(testurl);
            console.log("file==",file)
            var file3 = new File([file], fileName, { type: imgType });
            console.log(file3)
            formData.append("file", file3);
            setTimeout(function() {
              
              console.log(formData);
              let resImg = axios
                .post("/uploads/images", formData)
                .then((response) => {
                  console.log(response.data.url)
                  setPreview(response.data.url);
                  return response.data.url;
                })
                .catch((e) => {
                  console.log(e);
                });
            }, 500);
            
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
}
