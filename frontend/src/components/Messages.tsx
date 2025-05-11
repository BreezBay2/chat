import useGetMessages from "../hooks/useGetMessages";
import useListenMessages from "../hooks/useListenMessages";
import "../styles/components/Messages.css";
import Message from "./Message";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();

    return (
        <div className="messages-container">
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
