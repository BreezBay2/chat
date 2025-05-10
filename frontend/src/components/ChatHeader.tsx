import { X } from "@phosphor-icons/react";
import "../styles/components/ChatHeader.css";

const ChatHeader = () => {
    return (
        <div className="header-container">
            <div className="header-user">
                <img src="placeholder-avatar.png" />
                <div className="header-names">
                    <p>John Doe</p>
                    <p className="header-online-status">Offline</p>
                </div>
            </div>
            <X size={32} color="#db924c" weight="bold" />
        </div>
    );
};

export default ChatHeader;
