import useGetUsers from "../hooks/useGetUsers";
import "../styles/components/Sidebar.css";

const Sidebar = () => {
    const { users, loading } = useGetUsers();
    return (
        <div className="sidebar">
            <h1>Users</h1>
            {users.map((user) => (
                <div className="user-container">
                    <img src={user.profilePicture} />
                    <div>
                        <p>{user.fullname}</p>
                        <p className="online-status">Offline</p>
                    </div>
                </div>
            ))}
            {loading ? <h1>Loading...</h1> : null}
        </div>
    );
};

export default Sidebar;
