import styles from "./modal.module.scss";
// const Modal = () => {
//   return <div className={styles.modal}></div>;
// };

const Modal = () => {
  return (
    <div className={styles.modal}>
      <button className={styles.close}>x</button>
      <span className={styles.blueIcon}>
        <span className={styles.check}>✓</span>
      </span>
      <p className={styles.text}>
        <strong>업로드되었습니다.</strong>
        <br />내 강의에서 확인하세요.
      </p>
      <button type="button" className={styles.blueBtn}>
        내 강의 바로가기
      </button>
    </div>
  );
};

const GrayModal = () => {
  return (
    <div className={styles.modal}>
      <button className={styles.close}>x</button>
      <div className={styles.grayIcon}>
        <span className={styles.check}>x</span>
      </div>
      <p className={styles.text}>
        <strong>입력한 내용이 저장되지 않습니다.</strong>
        <br />
        뒤로 가시겠습니까?
      </p>
      <button type="button" className={styles.grayBtn}>
        뒤로가기
      </button>
    </div>
  );
};

export default Modal;
