import "../styles/components/ChatContainer.css";
import useChatStore from "../zustand/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const ChatContainer = () => {
    const { selectedUser } = useChatStore();

    return (
        <div className="chat-container">
            {!selectedUser ? (
                <div>Chat</div>
            ) : (
                <>
                    <ChatHeader />
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default ChatContainer;
