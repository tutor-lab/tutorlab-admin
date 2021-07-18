import Image from "next/image";
import router from "next/router";
import styles from "../styles/myclass.module.scss";
import ClassCard from "./classcard";
import BottomTab from "./bottomtab";
import Data from "../data.json";

const MyClass = ({}) => {
  for (let i = 0; i < Data.classes.length; i++) {
    console.log(typeof Data.classes[i].tag);
  }
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
        <h3 className={styles.smallheadingB}>
          등록한 강의 총 {Data.registercnt}개
        </h3>
        {Data.classes.map((data, i) => {
          return data.register ? (
            <ClassCard data={data} key={i}></ClassCard>
          ) : (
            <></>
          );
        })}
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>
    </>
  );
};
export default MyClass;
