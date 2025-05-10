import { X } from "@phosphor-icons/react";
import "../styles/components/ChatHeader.css";
import useChatStore from "../zustand/useChatStore";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();

    return (
        <div className="header-container">
            <div className="header-user">
                <img src={selectedUser?.profilePicture} />
                <div className="header-names">
                    <p>{selectedUser?.fullname}</p>
                    <p className="header-online-status">Offline</p>
                </div>
            </div>
            <X
                size={32}
                weight="bold"
                className="close-chat"
                onClick={() => setSelectedUser(null)}
            />
        </div>
    );
};

export default ChatHeader;
