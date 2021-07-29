import ImgSection from "../components/classmain/ImgSection";
import IntroSection from "../components/classmain/IntroSection";
import style from "./classMain.module.scss";
import BottomTab from "../components/bottomtab";
import ReviewSection from "../components/classmain/ReviewSection";
import Data from "../classdata.json";
import TotalReview from "../components/classmain/TotalReview";

const ClassMain = ({}) => {
  return (
    <section className={style.main}>
      <ImgSection thumbnail={"/images/classImage.jpg"} online={1} offline={1} />
      <IntroSection
        tutorname={Data.tutor}
        title={Data.title}
        rating={Data.totalRating.toFixed(1)}
        reviewCnt={Data.reviewCnt}
        subheading={Data.explanation}
        originPrice={Data.originPrice}
        discount={Data.dc}
        finalPrice={Data.originPrice * (100 - Data.dc) * 0.01}
        notes={Data.notes}
      ></IntroSection>

      <div className={style.category}>
        <span className={style.unselected}>강의소개</span>
        <span className={style.selected}>리뷰({Data.reviewCnt})</span>
      </div>

      <TotalReview
        totalRating={Data.totalRating}
        reviewCnt={Data.reviewCnt}
      ></TotalReview>

      {Data.reviews.map((data, i) => {
        return (
          <ReviewSection
            Uprofile={"/images/classImage.jpg"}
            // Uprofile={""}
            Uname={data[0].name}
            Udate={data[0].Udate}
            URating={data[0].rate}
            Ureview={data[0].Utext}
            Tprofile={"/images/classImage.jpg"}
            Tdate={data[1].Tdate}
            Tcomment={data[1].Ttext}
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
