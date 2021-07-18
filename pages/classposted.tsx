import Image from "next/image";
import router from "next/router";
import styles from "../styles/myclass.module.scss";
import ClassCard from "./classcard";
import BottomTab from "./bottomtab";

const ClassPosted = ({}) => {
  return (
    <>
      <div className={styles.whitepage}>
        <h1 className={styles.title}>튜터</h1>
        <button
          type="button"
          className={styles.unselected}
          onClick={() => router.push("/myclass")}
        >
          내 강의
        </button>
        <button
          type="button"
          className={styles.selected}
          onClick={() => router.push("/classposted")}
        >
          강의 등록
        </button>
      </div>
      <div className={styles.graypage}>
        <div className={styles.new}>
          <h3 className={styles.smallheadingB}>새로운 강의 등록하기</h3>
          <button
            type="button"
            className={styles.add}
            onClick={() => router.push("/newclass")}
          >
            <p>
              강의를 등록하고
              <br /> 더 많은 튜티들을 만나보세요!
            </p>
            <div className={styles.pluspic}>
              <Image
                src="/../public/images/plus.png"
                width="16px"
                height="16px"
                alt=""
              />
            </div>
          </button>
        </div>
        <div className={styles.testing}>
          <h3 className={styles.smallheadingM}>
            심사 중인 강의 2개(최대 24시간 소요)
          </h3>
          <ClassCard />
          <ClassCard />
        </div>
        {/* 실제로 데이터 받아올 땐 <Row>map으로 처리</Row> */}
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>
    </>
  );
};

export default ClassPosted;
