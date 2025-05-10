import { PaperPlaneTilt } from "@phosphor-icons/react";
import "../styles/components/MessageInput.css";

const MessageInput = () => {
    return (
        <div className="message-input-container">
            <input type="text" placeholder="Message" />
            <PaperPlaneTilt size={32} color="#db924c" />
        </div>
    );
};

export default MessageInput;
