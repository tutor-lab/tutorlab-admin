import BottomTab from "../bottomtab";
import styles from "./bottomSection.module.scss";
const BottomSection = ({ text, onClick, handleSubmit }) => {
  return (
    <section className={styles.fixed}>
      {text == "강의 업로드" ? (
        <form onSubmit={handleSubmit}>
          <button type="submit" className={styles.next} onClick={onClick}>
            {text}
          </button>
        </form>
      ) : (
        <button type="button" className={styles.next} onClick={onClick}>
          {text}
        </button>
      )}
      <BottomTab />
    </section>
  );
};
export default BottomSection;
