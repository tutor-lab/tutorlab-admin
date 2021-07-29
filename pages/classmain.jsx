import ImgSection from "../components/classmain/ImgSection";
import IntroSection from "../components/classmain/IntroSection";
import style from "./classMain.module.scss";
import BottomTab from "../components/bottomtab";
import ReviewSection from "../components/classmain/ReviewSection";
import Data from "../data.json";
import TotalReview from "../components/classmain/TotalReview";

const ClassMain = ({}) => {
  /* Data.classes -> map으로! 강의 메인 화면 나오면 적용 예정 */
  return (
    <section className={style.main}>
      <ImgSection thumbnail={"/images/classImage.jpg"} online={1} offline={1} />
      <IntroSection
        tutorname={Data.classes[0].tutor}
        title={Data.classes[0].title}
        rating={Data.classes[0].totalRating.toFixed(1)}
        reviewCnt={Data.classes[0].reviewCnt}
        subheading={Data.classes[0].explanation}
        originPrice={Data.classes[0].originPrice}
        discount={Data.classes[0].dc}
        finalPrice={
          Data.classes[0].originPrice * (100 - Data.classes[0].dc) * 0.01
        }
        notes={Data.classes[0].notes}
      ></IntroSection>

      <div className={style.category}>
        <span className={style.unselected}>강의소개</span>
        <span className={style.selected}>
          리뷰({Data.classes[0].reviewCnt})
        </span>
      </div>

      <TotalReview
        totalRating={Data.classes[0].totalRating}
        reviewCnt={Data.classes[0].reviewCnt}
      ></TotalReview>

      {Data.classes[0].reviews.map((data, i) => {
        return (
          <ReviewSection
            Uprofile={"/images/classImage.jpg"}
            Uname={data.name}
            Udate={data.date}
            URating={data.rate}
            Ureview={data.text}
            Tprofile={"/images/classImage.jpg"}
            Tdate={"2021.07.22"}
            Tcomment={
              "박민지 튜티님, 후기 감사합니다. 다른 수업에서도 최선을 다해서 알려드릴게요ㅎㅎ"
            }
            key={i}
          ></ReviewSection>
        );
      })}

      <div className={style.fixedTab}>
        <BottomTab />
      </div>
    </section>
  );
};
export default ClassMain;
