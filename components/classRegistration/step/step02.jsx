import styles from "./step02.module.scss";
import style2 from "../btn_inputs/addDelete.module.scss";
import WhiteSection from "../WhiteSection";
import BottomSection from "../BottomSection";
import SquareButton from "../btn_inputs/SquareButton";
import Quill from "../../quillEditor/QuillDynamic";
import LanguageModal from "../LanguageModal";
import { LevelModal } from "../LanguageModal";
import { AddBtn, DeleteBtn } from "../btn_inputs/AddDeleteBtn";
import { useState } from "react";
const Step02 = ({
  form,
  nextStep,
  prevStep,
  handleChange,
  showModal,
  showLevel,
  MoveStep,
  Close,
}) => {
  const [classList, setClassList] = useState([{ value: undefined }]);
  const AddClasses = () => {
    setClassList(classList.concat([{ value: undefined }]));
  };

  const DeleteClasses = (e) => {
    const index = Number(e.target.id.split("-")[1]);
    setClassList(classList.splice(index, 1));
    console.log(classList);
  };

  const setCertificateValue = (e) => {
    const { id, value } = e.target;
    console.log(`id=${id} / value=${value}`);
    let copyList = [...certificateList];
    copyList[Number(id.split("-")[1])].value = value;
    setCertificateList(copyList);
  };

  return (
    <div className={styles.step02} onClick={Close}>
      <div className={styles.background} id="LanBackground">
        <div className={styles.modal} id="languageModal">
          <LanguageModal handleChange={handleChange} />
        </div>
      </div>
      <div className={styles.background} id="LevBackground">
        <div className={styles.modal} id="levelModal">
          <LevelModal handleChange={handleChange} />
        </div>
      </div>
      <WhiteSection step={2} onClick={prevStep} MoveStep={MoveStep} />
      <section className={styles.graySection}>
        <div className={styles.margin}>
          <h1 className={styles.title}>1. 강의 종류를 선택해주세요.</h1>
          {classList.length > 0 &&
            classList.map((e, i) => {
              if (i == classList.length - 1) {
                return (
                  <>
                    <div className={styles.classType}>
                      <SquareButton category={"강의 종류"} element={"개발"} />
                      <SquareButton
                        id="languageBtn"
                        category={"언어"}
                        element={form.language}
                        showModal={showModal}
                      />
                      {classList.length == 1 ? (
                        <div className={style2.temp} />
                      ) : (
                        <DeleteBtn onClick={DeleteClasses} />
                      )}
                    </div>
                    <AddBtn onClick={AddClasses} />
                  </>
                );
              } else {
                return (
                  <>
                    <div className={styles.classType}>
                      <SquareButton category={"강의 종류"} element={"개발"} />
                      <SquareButton
                        id="languageBtn"
                        category={"언어"}
                        element={form.language}
                        showModal={showModal}
                      />
                      {classList.length == 1 ? (
                        <div className={style2.temp} />
                      ) : (
                        <DeleteBtn onClick={DeleteClasses} />
                      )}
                    </div>
                  </>
                );
              }
            })}
          {/* <SquareButton category={"강의 종류"} element={"개발"} />
          <SquareButton
            id="languageBtn"
            category={"언어"}
            element={form.language}
            showModal={showModal}
          />
          <DeleteBtn /> */}
          {/* {certificateList.length > 0 && certificateList.map((e, i)             */}
          {/* <input
              key={`certificate-${i}`}
              type="text"
              id={`certificate-${i}`}
              placeholder="자격증"
              value={e.value}
              onChange={(e) => {
                setCertificateValue(e);
              }}
            /> */}
        </div>
        <div className={styles.margin}>
          <h1 className={styles.title}>2. 강의 난이도를 선택해주세요.</h1>
          <SquareButton
            id="levelBtn"
            category={"강의 난이도"}
            element={form.level}
            showModal={showLevel}
          />
        </div>
        <div className={styles.margin}>
          <h1 className={styles.title}>
            3. 강의 상세 내용 및 이미지를 등록해주세요.
          </h1>
          <ul className={styles.example}>
            <li>튜터 간략 소개</li>
            <li>커리큘럼</li>
            <li>강의 예시화면 - gif 등록 가능(00mb 이하)</li>
          </ul>
        </div>
        <Quill className={styles.quillEditor} />
      </section>
      <BottomSection text={"다음"} onClick={nextStep} />
    </div>
  );
};
export default Step02;
