import { X } from "@phosphor-icons/react";
import "../styles/components/ChatHeader.css";
import useChatStore from "../zustand/useChatStore";
import { useSocketContext } from "../context/SocketContext";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useSocketContext();
    const isOnline = selectedUser
        ? onlineUsers.includes(selectedUser.id)
        : null;

    return (
        <div className="header-container">
            <div className="header-user">
                <img src={selectedUser?.profilePicture} />
                <div className="header-names">
                    <p>{selectedUser?.fullname}</p>
                    <div>
                        {isOnline ? (
                            <div className="header-online-status">
                                <div className="header-online-icon"></div>
                                <p>Online</p>
                            </div>
                        ) : (
                            <p className="header-offline-status">Offline</p>
                        )}
                    </div>
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
