import { useSocketContext } from "../context/SocketContext";
import useGetUsers from "../hooks/useGetUsers";
import "../styles/components/Sidebar.css";
import useChatStore from "../zustand/useChatStore";

const Sidebar = () => {
    const { users, loading } = useGetUsers();
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useSocketContext();

    return (
        <div className="sidebar">
            <h1>Chats</h1>
            <div className="user-divider" />
            {users.map((user) => (
                <div
                    className={
                        selectedUser?.id === user.id
                            ? "user-container-selected"
                            : "user-container"
                    }
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                >
                    <img src={user.profilePicture} />
                    <div>
                        <p>{user.fullname}</p>
                        {onlineUsers.includes(user.id) ? (
                            <div className="online-status">
                                <div className="online-icon"></div>
                                <p>Online</p>
                            </div>
                        ) : (
                            <p className="offline-status">Offline</p>
                        )}
                    </div>
                </div>
            ))}
            {loading ? <h1>Loading...</h1> : null}
        </div>
    );
};

export default Sidebar;
