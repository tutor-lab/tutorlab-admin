import styles from "./basic.module.scss";
import Image from "next/image";
import BottomTab from "../bottomtab";
const WhiteSection = ({ step }) => {
  return (
    <section className={styles.white}>
      <div className={styles.firstLine}>
        <span className={styles.prev}>
          <Image
            src="/images/prev.png"
            alt="이전 화면으로"
            width="10px"
            height="14px"
          ></Image>
        </span>
        <h1 className={styles.title}>강의 등록</h1>
      </div>
      <div className={styles.secondLine}>
        <h2 className={step == 1 ? styles.selected : styles.unselected}>
          1단계
        </h2>
        <h2 className={step == 2 ? styles.selected : styles.unselected}>
          2단계
        </h2>
        <h2 className={step == 3 ? styles.selected : styles.unselected}>
          3단계
        </h2>
      </div>
    </section>
  );
};

const GraySection = () => {
  return <section className={styles.gray}></section>;
};

const NextBtn = ({ text }) => {
  return <button className={styles.next}>{text}</button>;
};

const Basic = ({ btnText, step }) => {
  return (
    <>
      <WhiteSection step={step} />
      <GraySection />
      <section className={styles.fixed}>
        <NextBtn text={btnText} />
        <BottomTab />
      </section>
    </>
  );
};

export default Basic;
