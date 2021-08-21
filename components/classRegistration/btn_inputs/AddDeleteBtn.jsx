import styles from "./addDelete.module.scss";
const AddBtn = ({ handleClick }) => {
  return (
    <button type="button" className={styles.addBtn} onClick={handleClick}>
      <span className={styles.addText}>추가</span>
    </button>
  );
};

const DeleteBtn = () => {
  return (
    <button type="button" className={styles.deleteBtn}>
      <span className={styles.deleteText}>⨉</span>
    </button>
  );
};

export { AddBtn, DeleteBtn };
