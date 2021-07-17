import Image from "next/image";
import styles from "../styles/bottomtab.module.scss";
const BottomTab = ({}) => {
  return (
    <>
      <ul className={styles.tab}>
        <a href="/myclass">
          {/* 임시로 링크! */}
          <li className={styles.elements}>
            <div className={styles.img}>
              <Image
                src="/../public/images/class.png"
                width="23px"
                height="23px"
                alt="강의"
                className={styles.img}
              />
            </div>
            <span>강의</span>
          </li>
        </a>

        <a href="/board">
          <li className={styles.elements}>
            <div className={styles.img}>
              <Image
                src="/../public/images/board.png"
                width="23px"
                height="23px"
                alt="게시판"
                className={styles.img}
              />
            </div>
            <span>게시판</span>
          </li>
        </a>

        <a href="/promotion">
          <li className={styles.elements}>
            <div className={styles.img}>
              <Image
                src="/../public/images/promotion.png"
                width="23px"
                height="23px"
                alt="프로모션"
              />
            </div>
            <span>프로모션</span>
          </li>
        </a>

        <a href="/mypage">
          <li className={styles.elements}>
            <div className={styles.img}>
              <Image
                src="/../public/images/mypage.png"
                width="23px"
                height="23px"
                alt="마이페이지"
              />
            </div>
            <span>마이페이지</span>
          </li>
        </a>
      </ul>
    </>
  );
};
export default BottomTab;
