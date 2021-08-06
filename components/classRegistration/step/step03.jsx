import styles from "./step03.module.scss";
import WhiteSection from "../WhiteSection";
import BottomSection from "../BottomSection";
import EllipseButton from "../btn_inputs/EllipseButton";
import ClassCost from "../btn_inputs/ClassCost";
import { BlueModal } from "../Modal";

const Step03 = ({ form, prevStep, handleChange }) => {
  return (
    <div className={styles.step03}>
      <div className={styles.background}>
        <div className={styles.uploadModal} id="uploadModal">
          <BlueModal />
        </div>
      </div>
      <WhiteSection step={3} onClick={prevStep} />
      <section className={styles.graySection}>
        <div>
          <h1 className={styles.title}>1. 강의 방식1을 선택해주세요.</h1>
          <span className={styles.cf}>* 중복선택 가능</span>
          <div className={styles.classType}>
            <EllipseButton
              element={"온라인"}
              selected={form.update.online}
              id={"online"}
              onClick={handleChange("online")}
            />
            <EllipseButton
              element={"오프라인"}
              selected={form.update.offline}
              id={"offline"}
              onClick={handleChange("offline")}
            />
            <EllipseButton
              element={"장소 협의 가능"}
              selected={form.update.discuss}
              id={"discuss"}
              onClick={handleChange("discuss")}
            />
          </div>
        </div>
        <div>
          <h1 className={styles.title}>2. 강의 방식2을 선택해주세요.</h1>
          <span className={styles.cf}>* 중복선택 가능</span>
          <div className={styles.classType}>
            <EllipseButton
              element={"1:1 수업"}
              selected={form.update.personal}
              id={"personal"}
              onClick={handleChange("personal")}
            />
            <EllipseButton
              element={"그룹 수업"}
              selected={form.update.group}
              id={"group"}
              onClick={handleChange("group")}
            />
          </div>
        </div>

        {form.update.personal == "off" && form.update.group == "off" && (
          <div className={styles.basic} />
        )}

        {form.update.personal == "on" && (
          <div>
            <h1 className={styles.title}>3. 1:1 수업 가격을 입력해주세요.</h1>
            <ClassCost
              form={form}
              handleChange={handleChange}
              distinct={"personal"}
            />
          </div>
        )}

        {form.update.group == "on" && (
          <div>
            <h1 className={styles.title}>
              {form.update.personal == "on" ? <span>4</span> : <span>3</span>}.
              그룹 수업 가격을 입력해주세요.
            </h1>
            <ClassCost
              form={form}
              handleChange={handleChange}
              distinct={"group"}
            />
          </div>
        )}
      </section>
      <BottomSection
        text={"강의 업로드"}
        onClick={() => {
          const menu = document.getElementById("uploadModal");
          menu ? (menu.style.display = "block") : "";
        }}
      />
    </div>
  );
};
export default Step03;
