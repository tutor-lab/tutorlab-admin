import Image from "next/image";
import styles from "../styles/classcard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
interface classes {
  title: string;
  offline: boolean;
  online: boolean;
  explanation: string;
  tag: string[];
  likes: number;
  register: boolean;
  testing: boolean;
}

const ClassCard = ({ data }: any) => {
  return (
    <div className={styles.classCard}>
      <div className={styles.classCardImage}>
        <Image
          src="/../public/images/classImage.jpg"
          width="330px"
          height="136px"
          alt="취업이 빨라지는 개발 교육 첫단계"
          className={styles.classCardImg}
        />
        <div className={styles.onoffMethod}>
          {data.offline ? (
            <strong className={styles.onoff} aria-label="오프라인으로 진행">
              오프라인
            </strong>
          ) : (
            <></>
          )}
          {data.online ? (
            <strong className={styles.onoff} aria-label="온라인으로 진행">
              온라인
            </strong>
          ) : (
            <></>
          )}
        </div>
      </div>{" "}
      <div className={styles.classCardExplanation}>
        <h1>{data.title}</h1>
        <span className={styles.def}>{data.explanation} </span>
        <div className={styles.likes}>
          <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          <span className={styles.likeCnt}>{data.likes}</span>
        </div>
        <span className={styles.tag}>{data.tag}</span>
      </div>
    </div>
  );
};

export default ClassCard;
