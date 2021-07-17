import Image from "next/image";
import styles from "../styles/classcard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
//class==백엔드로부터 받은 강의 정보(강의이미지, 제목, 좋아요 수 등등)
const ClassCard = (
  {
    /*class
      class 속성마다 따로??*/
  }
) => {
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
          <strong className={styles.onoff} aria-label="오프라인으로 진행">
            오프라인
          </strong>
          <strong className={styles.onoff} aria-label="온라인으로 진행">
            온라인
          </strong>
        </div>
      </div>{" "}
      <div className={styles.classCardExplanation}>
        <h1>취업이 빨라지는 개발 교육 첫단계</h1>
        <span className={styles.def}>
          빅데이터플랫폼 구축, 실무 경험 그대로
        </span>
        <div className={styles.likes}>
          <button type="button" className={styles.heart}>
            <FontAwesomeIcon icon={faHeart} />
            {/* 위는 임시이미지! 좋아요 이미지 필요 */}
          </button>
          <span className={styles.likeCnt}>132</span>
        </div>
        <span className={styles.tag}>#S사 10년 근무 #SW개발 및 품질 경력</span>
      </div>{" "}
    </div>
  );
};

//button image는 css로!
export default ClassCard;
