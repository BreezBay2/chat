import { useAuthContext } from "../context/AuthContext";
import "../styles/components/ChatContainer.css";
import useChatStore from "../zustand/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const ChatContainer = () => {
    const { authUser } = useAuthContext();
    const { selectedUser } = useChatStore();

    return (
        <div className="chat-container">
            {!selectedUser ? (
                <div className="no-chat-selected">
                    <p>Welcome {authUser?.fullname} ⭐️</p>
                </div>
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
