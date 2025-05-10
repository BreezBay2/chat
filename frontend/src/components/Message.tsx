import "../styles/components/Message.css";

const Message = () => {
    return (
        <div className="message-container">
            <img src="placeholder-avatar.png" />
            <div className="message-bubble">Test Message Test Message</div>
            <p className="message-timestamp">22:22</p>
        </div>
    );
};

export default Message;
