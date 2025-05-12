import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";
import "../../styles/components/Messages.css";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="messages-container" ref={messagesRef}>
            {loading && <h1>Loading...</h1>}
            {!loading &&
                messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            {!loading && messages.length === 0 && (
                <p className="empty-chat">
                    No Messages yet. Send a message to start a chat!
                </p>
            )}
        </div>
    );
};

export default Messages;
