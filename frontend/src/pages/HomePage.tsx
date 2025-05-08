import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

const HomePage = () => {
    const { logout } = useLogout();
    const { authUser } = useAuthContext();
    return (
        <div>
            <h1>Welcome Back, {authUser?.username}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default HomePage;
