import Image from "next/image";
import styles from "../styles/myclass.module.scss";
import newstyle from "../styles/newclass.module.scss";
import BottomTab from "./bottomtab";

const NewClass = ({}) => {
  return (
    <>
      <div className={newstyle.whitepage}>
        <h1 className={newstyle.title}>강의 등록</h1>
        {/* 2,3단계 컴포넌트 따로+다른 페이지에 합치기 
        다음/이전으로 넘어가는 거라 링크 필요 없음!*/}
        <h2 className={newstyle.selected}>1단계</h2>
        <h2 className={newstyle.unselected}>2단계</h2>
        <h2 className={newstyle.unselected}>3단계</h2>
      </div>
      <div className={newstyle.graypage}>
        <div>
          <p className={newstyle.question}>
            1. 강의 소개 메인 이미지를 등록해주세요.
          </p>
          <label htmlFor="classImg">
            <div className={newstyle.add}>
              <div className={newstyle.pluspic}>
                <Image
                  src="/../public/images/plus.png"
                  width="16px"
                  height="16px"
                  alt=""
                />
              </div>
              <p className={newstyle.placeholdertext}>
                가로:00px 세로:00px(00바이트 이내)
              </p>
            </div>
            <input type="file" id="classImg"></input>
          </label>
        </div>{" "}
        <div>
          <p className={newstyle.question}>2. 강의 타이틀을 입력해주세요.</p>
          <textarea
            placeholder="최대 40자"
            className={newstyle.inputBox}
          ></textarea>
          <p className={newstyle.example}>
            ex) 금융권 취업을 위한 데이터 분석 및 모델링
          </p>
        </div>{" "}
        <div>
          {" "}
          <p className={newstyle.question}>3. 강의 소제목을 입력해주세요.</p>
          <textarea
            placeholder="최대 40자"
            className={newstyle.inputBox}
          ></textarea>
          <p className={newstyle.example}>
            ex) 빅데이터 플랫폼 구축,실무 경험 그대로
          </p>
        </div>{" "}
        <div>
          <p className={newstyle.question}>4. 간략하게 나를 설명해주세요.</p>
          <textarea
            placeholder="최대 40자"
            className={newstyle.inputBox}
          ></textarea>
          <p className={newstyle.example}>
            ex) 삼성전자 10년 근무,sw 개발 및 품질 경력
          </p>
        </div>{" "}
        <button type="button" className={newstyle.next}>
          다음
        </button>
      </div>
      <div className={newstyle.fixedTab}>
        <BottomTab />
      </div>
    </>
  );
};
export default NewClass;
