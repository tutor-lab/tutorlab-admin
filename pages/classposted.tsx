import Image from "next/image";
import styles from "../styles/myclass.module.scss";
import ClassCard from "./classcard";
import BottomTab from "./bottomtab";

const ClassPosted = ({}) => {
  return (
    <>
      <div className={styles.whitepage}>
        <h1 className={styles.title}>튜터</h1>
        <a href="/myclass">
          <h2 className={styles.unselected}>내 강의</h2>
        </a>
        <a href="/classposted">
          <h2 className={styles.selected}>강의 등록</h2>
        </a>
      </div>
      <div className={styles.graypage}>
        <div className={styles.new}>
          <h3 className={styles.smallheadingB}>새로운 강의 등록하기</h3>
          {/* <label htmlFor="newClass"> */}
          <a href="/newclass">
            <div className={styles.add}>
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
              {/* <input type="file" id="newClass"></input> */}
            </div>
          </a>
          {/* </label> */}
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
