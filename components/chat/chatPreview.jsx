import styles from "./chatPreview.module.scss";
import Image from "next/image";
const ChatPreview = ({ data }) => {
  return (
    <section className={styles.previewSection}>
      <div className={styles.profile}>
        {/* <Image src={data.profile} width="30px" height="30px" alt="프로필" /> */}
      </div>
      <div className={styles.chat}>
        <span className={styles.name}>{data.name} 튜티</span>
        <span className={styles.last}>{data.last}</span>
      </div>
      <span className={styles.date}>{data.date}</span>
    </section>
  );
};
export default ChatPreview;
