import ImgSection from "../components/classmain/ImgSection";
import IntroSection from "../components/classmain/IntroSection";
import style from "./classMain.module.scss";
import BottomTab from "../components/bottomtab";
import ReviewSection from "../components/classmain/ReviewSection";

const ClassMain = ({}) => {
  return (
    <section className={style.main}>
      <ImgSection thumbnail={"/images/classImage.jpg"} online={1} offline={1} />
      <IntroSection
        tutorname={"김하나"}
        title={"금융권 취업을 위한 데이터 분석 및 모델링 - SQL, R, Python"}
        rating={5}
        reviewCnt={12}
        subheading={
          "데이터분석 기초부터 실무까지, 현업에서 사용하는 데이터 분석 기술 파헤치기"
        }
        originPrice={299000}
        discount={30}
        finalPrice={209300}
        notes={"쿠폰 적용 시, 5개월 할부"}
      ></IntroSection>
      <div className={style.category}>
        <span className={style.unselected}>강의소개</span>
        <span className={style.selected}>리뷰({12})</span>
      </div>
      <ReviewSection
        totalRating={5.0}
        reviewCnt={12}
        Uprofile={"/images/classImage.jpg"}
        Uname={"박민지"}
        Udate={"2021.07.18"}
        URating={4.5}
        Ureview={
          "질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼대로 잘 따라갈 수 있도록 자세히 가르쳐주십니다. 다른 수업도 듣고 싶어요:)"
        }
        Tprofile={"/images/classImage.jpg"}
        Tdate={"2021.07.22"}
        Tcomment={
          "박민지 튜티님, 후기 감사합니다. 다른 수업에서도 최선을 다해서 알려드릴게요ㅎㅎ"
        }
      ></ReviewSection>
      <div className={style.fixedTab}>
        {" "}
        <BottomTab />
      </div>
    </section>
  );
};
export default ClassMain;
