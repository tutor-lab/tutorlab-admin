import styles from "./addDelete.module.scss";
const AddBtn = ({ onClick }) => {
  return (
    <button type="button" className={styles.addBtn} onClick={onClick}>
      <span className={styles.addText}>추가</span>
    </button>
  );
};

const DeleteBtn = ({ onClick }) => {
  return (
    <button type="button" className={styles.deleteBtn} onClick={onClick}>
      <span className={styles.deleteText}>⨉</span>
    </button>
  );
};

export { AddBtn, DeleteBtn };
