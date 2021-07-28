import Image from "next/image";
import style from "./reviewSection.module.scss";

const Review = ({ profile, name, date, rating, review }) => {
  return (
    <section className={style.UserReview}>
      <div className={style.profile}>
        <Image
          src={profile}
          alt=""
          width="30px"
          height="30px"
          className={style.profile}
        ></Image>
      </div>
      <div className={style.textSection}>
        <h2 className={style.name}>
          {name} <span className={style.date}>{date}</span>
        </h2>
        <span className={style.rating}>{rating}</span>
        <span className={style.review}>{review}</span>
      </div>
    </section>
  );
};

const Comment = ({ profile, date, comment }) => {
  return (
    <section className={style.TutorComment}>
      <div className={style.profile}>
        <Image
          src={profile}
          alt=""
          width="30px"
          height="30px"
          className={style.profile}
        ></Image>
      </div>
      <section className={style.textSection}>
        <h2 className={style.name}>
          튜터 댓글 <span className={style.date}>{date}</span>
        </h2>
        <span className={style.comment}>{comment}</span>
      </section>
    </section>
  );
};

const CommentWriting = () => {
  return (
    <section className={style.ReviewWriting}>
      <div className={style.WritingBox}>
        <textarea
          placeholder="댓글을 입력해주세요"
          className={style.text}
        ></textarea>
        <button type="submit" className={style.btn}>
          등록
        </button>
      </div>
    </section>
  );
};

const ReviewSection = ({
  totalRating,
  reviewCnt,
  Uprofile,
  Uname,
  Udate,
  URating,
  Ureview,
  Tprofile,
  Tdate,
  Tcomment,
}) => {
  return (
    <section className={style.ReviewSection}>
      <section className={style.totalReview}>
        <strong className={style.rating}>{totalRating.toFixed(1)}</strong>
        <span className={style.reviewCnt}>{reviewCnt}개의 리뷰</span>
      </section>
      <Review
        profile={Uprofile}
        name={Uname}
        date={Udate}
        rating={URating}
        review={Ureview}
      ></Review>
      <Comment profile={Tprofile} date={Tdate} comment={Tcomment}></Comment>
      <CommentWriting></CommentWriting>
    </section>
  );
};
export default ReviewSection;
