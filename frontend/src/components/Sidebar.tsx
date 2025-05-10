import useGetUsers from "../hooks/useGetUsers";
import "../styles/components/Sidebar.css";
import useChatStore from "../zustand/useChatStore";

const Sidebar = () => {
    const { users, loading } = useGetUsers();
    const { selectedUser, setSelectedUser } = useChatStore();

    return (
        <div className="sidebar">
            <h1>Chats</h1>
            <div className="user-divider" />
            {users.map((user) => (
                <div>
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
                            <p className="online-status">Offline</p>
                        </div>
                    </div>
                </div>
            ))}
            {loading ? <h1>Loading...</h1> : null}
        </div>
    );
};

export default Sidebar;
