import styles from "./selectButton.module.scss";
const SquareButton2 = ({ category, element }) => {
  return (
    <div className={styles.squareBtn}>
      <button type="button" className={styles.btn}>
        <span className={styles.category}>{category}</span>
        <span className={styles.element}>{element}</span>
      </button>
    </div>
  );
};

const EllipseButton = ({ element, selected }) => {
  return (
    <div className={styles.ellipseBtn}>
      <button
        type="button"
        className={styles.selected}
        // className={selected ? styles.selected : styles.unselected}
      >
        <span className={styles.check}>✓</span>
        {/*selected에 따라 check 나타나게 */}
        <span className={styles.element}>{element}</span>
      </button>
    </div>
  );
};

const ShortSquare = ({ definition, unit }) => {
  return (
    <div className={styles.shortSquare}>
      <span className={styles.definition}>{definition}</span>
      <div className={styles.userInput}>
        <input type="number" className={styles.inputBox} />
        <span className={styles.unit}>{unit}</span>
      </div>
    </div>
  );
};

const LongSquare = ({ price }) => {
  return (
    <div className={styles.longSquare}>
      <div className={styles.price}>최종 수강료</div>
      <div className={styles.price}>{price.toLocaleString("ko-KR")}원</div>
    </div>
  );
};

// export default SquareButton;
