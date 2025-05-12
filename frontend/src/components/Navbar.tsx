import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import { SignOut, UserCircle } from "@phosphor-icons/react";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
    const { logout } = useLogout();

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link className="navbar-link" to={"/"}>
                    Chat
                </Link>
                <div className="navbar-right">
                    <Link className="navbar-link" to={"/"}>
                        <UserCircle
                            size={32}
                            className="profile-icon"
                            weight="bold"
                        />
                        <p>Profile</p>
                    </Link>
                    <SignOut
                        size={32}
                        weight="bold"
                        className="logout-button"
                        onClick={logout}
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
