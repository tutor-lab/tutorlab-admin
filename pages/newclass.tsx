import Image from "next/image";
import styles from "../styles/myclass.module.scss";
import newstyle from "../styles/newclass.module.scss";

const NewClass = ({}) => {
  return (
    <>
      <div className={styles.whitepage}>
        <h1 className={newstyle.title}>강의 등록</h1>
        <a href="/myclass">
          <h2 className={styles.selected}>내 강의</h2>
        </a>
        <a href="/classposted">
          <h2 className={styles.unselected}>강의 등록</h2>
        </a>
      </div>
      <div className={styles.graypage}>
        <h3 className={styles.smallheadingB}>등록한 강의 총 4개</h3>
        <div className={styles.fixedTab}></div>
      </div>
    </>
  );
};
export default NewClass;
