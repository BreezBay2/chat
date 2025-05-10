import { useAuthContext } from "../context/AuthContext";
import "../styles/components/Message.css";
import { formatMessageTime } from "../utils/timeFormatter";
import type { MessageType } from "../zustand/useChatStore";
import useChatStore from "../zustand/useChatStore";

const Message = ({ message }: { message: MessageType }) => {
    const { authUser } = useAuthContext();
    const { selectedUser } = useChatStore();

    const myMessage = message?.senderId === authUser?.id;
    const image = myMessage
        ? authUser?.profilePicture
        : selectedUser?.profilePicture;

    return (
        <div
            className={
                myMessage ? "message-container-own" : "message-container"
            }
        >
            <img src={image} />
            <p className={myMessage ? "message-bubble-own" : "message-bubble"}>
                {message.body}
            </p>
            <p className="message-timestamp">
                {formatMessageTime(message.createdAt)}
            </p>
        </div>
    );
};

export default Message;
