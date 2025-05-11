import { PaperPlaneTilt } from "@phosphor-icons/react";
import "../styles/components/MessageInput.css";
import { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { sendMessage, loading } = useSendMessage();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message.trim()) {
            return;
        }
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="message-input-container">
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">
                    {loading ? (
                        <div>...</div>
                    ) : (
                        <PaperPlaneTilt size={32} color="#db924c" />
                    )}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
