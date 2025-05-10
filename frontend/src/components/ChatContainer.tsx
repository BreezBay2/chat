import "../styles/components/ChatContainer.css";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const ChatContainer = () => {
    return (
        <div className="chat-container">
            <ChatHeader />
            <Messages />
            <MessageInput />
        </div>
    );
};

export default ChatContainer;
