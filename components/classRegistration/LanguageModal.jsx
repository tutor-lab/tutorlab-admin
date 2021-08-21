import styles from "./languageModal.module.scss";
export const LanguageModal = ({ handleChange }) => {
  return (
    <div className={styles.modal} id="menu">
      <Language
        language={"Java"}
        select={1}
        handleChange={handleChange}
      ></Language>
      <Language
        language={"JavaScript"}
        select={2}
        handleChange={handleChange}
      ></Language>
      <Language
        language={"Python"}
        select={2}
        handleChange={handleChange}
      ></Language>
      <Language
        language={"SQL"}
        select={2}
        handleChange={handleChange}
      ></Language>
      <Language
        language={"R"}
        select={2}
        handleChange={handleChange}
      ></Language>
      <input
        type="text"
        placeholder="직접 입력 후 엔터키"
        className={styles.last}
        onKeyPress={handleChange("languageInput")}
        id="modalInput"
        name="languageInput"
      />
    </div>
  );
};

const Language = ({ language, select, handleChange }) => {
  return (
    <label htmlFor={language}>
      <div
        className={select == 1 ? styles.first : styles.modalElement}
        onClick={handleChange("language")}
      >
        <input type="radio" name="modalElement" id={language} />
        {language}
      </div>
    </label>
  );
};

const Level = ({ level, select, handleChange }) => {
  return (
    <label htmlFor={level}>
      <div
        className={
          select == 1
            ? styles.first
            : select == 2
            ? styles.modalElement
            : styles.last
        }
        onClick={handleChange("level")}
      >
        <input type="radio" name="levelElement" id={level} />
        {level}
      </div>
    </label>
  );
};

export const LevelModal = ({ handleChange }) => {
  return (
    <div className={styles.modal} id="level">
      <Level level={"입문"} select={1} handleChange={handleChange}></Level>
      <Level level={"초급"} select={2} handleChange={handleChange}></Level>
      <Level level={"중급"} select={2} handleChange={handleChange}></Level>
      <Level level={"고급"} select={3} handleChange={handleChange}></Level>
    </div>
  );
};

export default LanguageModal;
