import BottomTab from "../components/bottomtab";
import NameTab from "../components/chat/nameTab";
import TypingTab from "../components/chat/typingTab";
import styles from "./chat.module.scss";
import ChatContent from "../components/chat/chatContent";
const Chat = () => {
  return (
    <div className={styles.chat}>
      <NameTab name={"김하나"} />
      <ChatContent />
      <span className={styles.fixedTab}>
        <TypingTab />
        <BottomTab />
      </span>
    </div>
  );
};
export default Chat;
