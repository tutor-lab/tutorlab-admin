import Image from "next/image";
import style from "./imgSection.module.scss";

const ImgSection = ({ thumbnail, online, offline }) => {
  return (
    <section className={style.imageSection}>
      <Image
        src={thumbnail ? thumbnail : "/images/logo.png"}
        alt="강의 대표 이미지"
        width="376px"
        height="277px"
      />
      <span className={style.onOff}>
        {offline ? (
          <strong className={style.onOffBtn} aria-label="오프라인 진행">
            오프라인
          </strong>
        ) : (
          <></>
        )}
        {online ? (
          <strong className={style.onOffBtn} aria-label="온라인으로 진행">
            온라인
          </strong>
        ) : (
          <></>
        )}
      </span>
    </section>
  );
};
export default ImgSection;
