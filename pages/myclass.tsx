import Image from "next/image";
import router from "next/router";
import styles from "../styles/myclass.module.scss";
import ClassCard from "./classcard";
import BottomTab from "./bottomtab";

const MyClass = ({}) => {
  return (
    <>
      <div className={styles.whitepage}>
        <h1 className={styles.title}>튜터</h1>
        <button
          type="button"
          className={styles.selected}
          onClick={() => router.push("/myclass")}
        >
          내 강의
        </button>
        <button
          type="button"
          className={styles.unselected}
          onClick={() => router.push("/classposted")}
        >
          강의 등록
        </button>
      </div>
      <div className={styles.graypage}>
        <h3 className={styles.smallheadingB}>등록한 강의 총 4개</h3>
        <ClassCard />
        {/* 링크->세부 페이지로! */}
        <ClassCard />
        <ClassCard />
        <ClassCard />
        {/* 실제로 데이터 받아올 땐 <Row>map으로 처리</Row> */}
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>
    </>
  );
};
export default MyClass;
