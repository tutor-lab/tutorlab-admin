import styles from "./addImg.module.scss";
import Image from "next/image";
const AddImg = ({ form, preview }) => {
  return (
    <>
      {preview.selectedFile ? (
        <BasicBox />
      ) : form.image ? (
        <ImgBox preview={preview} />
      ) : (
        <BasicBox />
      )}
    </>
  );
};

const BasicBox = () => {
  return (
    <div className={styles.add}>
      <div className={styles.pluspic}>
        <Image
          src="/images/plus.png"
          width="16px"
          height="16px"
          alt="강의 대표 이미지를 추가하세요"
        />
      </div>
      <p className={styles.placeholdertext}>
        가로:00px 세로:00px(00바이트 이내)
      </p>
    </div>
  );
};

const ImgBox = ({ preview }) => {
  return (
    <div className={styles.add2}>
      <Image
        width="141px"
        height="141px"
        src={`data:image/png;base64,${preview}`}
        alt="강의 대표 이미지"
      />
    </div>
  );
};

export default AddImg;
