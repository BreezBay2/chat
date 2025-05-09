import ChatWindow from "../components/ChatWindow";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../context/AuthContext";
import "../styles/HomePage.css";

const HomePage = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="home-page">
            <Navbar />
            <ChatWindow />
        </div>
    );
};

export default HomePage;
