import Sidebar from "./Sidebar";
import ChatContainer from "./chat/ChatContainer";

const ChatWindow = () => {
    return (
        <div className="chat-window">
            <Sidebar />
            <ChatContainer />
        </div>
    );
};

export default ChatWindow;
