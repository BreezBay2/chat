import useGetMessages from "../hooks/useGetMessages";
import "../styles/components/Messages.css";
import Message from "./Message";

const Messages = () => {
    const { messages, loading } = useGetMessages();

    return (
        <div className="messages-container">
            {loading && <h1>Loading...</h1>}
            {!loading &&
                messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
        </div>
    );
};

export default Messages;
