import Image from "next/image";
import styles from "../styles/newclass.module.scss";
import BottomTab from "./bottomtab";

const NewClass01 = ({ form, nextStep, prevStep, handleChange }) => {
  return (
    <>
      <div className={styles.whitesection}>
        <div className={styles.prev} onClick={prevStep}>
          <Image
            src="/images/prev.png"
            alt=""
            width="10px"
            height="14px"
          ></Image>
        </div>
        <h1 className={styles.title}>강의 등록</h1>
        <div className={styles.category}>
          <h2 className={styles.selected}>1단계</h2>
          <h2 className={styles.unselected}>2단계</h2>
          <h2 className={styles.unselected}>3단계</h2>
        </div>{" "}
      </div>
      <div className={styles.graysection}>
        <div>
          <p className={styles.question}>
            1. 강의 소개 메인 이미지를 등록해주세요.
          </p>
          <label htmlFor="classImg">
            {form.update.img == undefined ? (
              <div className={styles.add}>
                <div className={styles.pluspic}>
                  <Image
                    src="/../public/images/plus.png"
                    width="16px"
                    height="16px"
                    alt=""
                  />
                </div>
                <p className={styles.placeholdertext}>
                  가로:00px 세로:00px(00바이트 이내)
                </p>
              </div>
            ) : (
              <div className={styles.add2}>
                <Image
                  width="141px"
                  height="141px"
                  src={`data:image/png;base64,${form.update.img}`}
                  alt=""
                />
              </div>
              // 미리보기 이미지 사이즈 조정 필요...
            )}
            <input
              type="file"
              id="classImg"
              onChange={handleChange("image")}
            ></input>
          </label>
        </div>{" "}
        <div>
          <p className={styles.question}>2. 강의 타이틀을 입력해주세요.</p>
          <textarea
            placeholder="최대 40자"
            className={styles.inputBox}
            onChange={handleChange("maintitle")}
          ></textarea>
          <p className={styles.example}>
            ex) 금융권 취업을 위한 데이터 분석 및 모델링
          </p>
        </div>{" "}
        <div>
          {" "}
          <p className={styles.question}>3. 강의 소제목을 입력해주세요.</p>
          <textarea
            placeholder="최대 40자"
            className={styles.inputBox}
            onChange={handleChange("subheading")}
          ></textarea>
          <p className={styles.example}>
            ex) 빅데이터 플랫폼 구축,실무 경험 그대로
          </p>
        </div>{" "}
        <div>
          <p className={styles.question}>4. 간략하게 나를 설명해주세요.</p>
          <textarea
            placeholder="최대 40자"
            className={styles.inputBox}
            onChange={handleChange("introduction")}
          ></textarea>
          <p className={styles.example}>
            ex) 삼성전자 10년 근무,sw 개발 및 품질 경력
          </p>
        </div>{" "}
      </div>
      <div className={styles.bottom}>
        <button type="button" className={styles.next} onClick={nextStep}>
          다음
        </button>
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>{" "}
    </>
  );
};
export default NewClass01;
