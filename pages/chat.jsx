import BottomTab from "../components/bottomtab";
import { MyChats, OthersChats } from "../components/chat/chatContent";
import NameTab from "../components/chat/nameTab";
import TypingTab from "../components/chat/typingTab";
import styles from "./chat.module.scss";
const Chat = () => {
  return (
    <div className={styles.chat}>
      <NameTab name={"김하나"} />
      <section className={styles.contentSection}>
        <MyChats
          text={
            "안녕하세요, 튜터 최재성입니다. 신청하신 'HTML&CSS 기초' 강의에 관한 안내 사항 전달해드립니다."
          }
          time={"오후 4:06"}
        />
        <MyChats
          text={
            "강의는 9월 13일, 다산로 120, 6층 604호에서 진행될 예정입니다. 노트북을 꼭 지참해주세요."
          }
          time={"오후 4:06"}
        />
        <MyChats
          text={
            "사용할 툴은 미리 설치하실 것을 권장드리며, 설치 방법은 영상으로 보내드리겠습니다:)"
          }
          time={"오후 4:07"}
        />
        <OthersChats
          text={
            "안녕하세요, 튜티 김하나입니다. OO 에러가 나서 설치가 잘 안 되는데, 어떻게 해결해야 할까요??"
          }
          time={"오후 6:13"}
        />
        <MyChats
          text={"xx를 먼저 설치하신 후에 다시 설치하시면 잘 될거에요!"}
          time={"오후 6:34"}
        />
        <OthersChats
          text={"잘 되네요 감사합니다:) 13일에 뵐게요!"}
          time={"오후 6:40"}
        />
      </section>
      <span className={styles.fixedTab}>
        <TypingTab />
        <BottomTab />
      </span>
    </div>
  );
};
export default Chat;
