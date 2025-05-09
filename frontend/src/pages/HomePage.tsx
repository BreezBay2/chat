import { useAuthContext } from "../context/AuthContext";
import "../styles/HomePage.css";

const HomePage = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="home-page">
            <h1>Welcome Back, {authUser?.username}</h1>
        </div>
    );
};

export default HomePage;
