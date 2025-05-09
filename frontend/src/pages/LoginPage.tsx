import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

import "../styles/LoginPage.css";

const LoginPage = () => {
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: "",
    });

    const { login, loading } = useLogin();

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        login(loginFormData.username, loginFormData.password);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmitForm} className="login-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={loginFormData.username}
                        onChange={(e) =>
                            setLoginFormData({
                                ...loginFormData,
                                username: e.target.value,
                            })
                        }
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                        onChange={(e) =>
                            setLoginFormData({
                                ...loginFormData,
                                password: e.target.value,
                            })
                        }
                    />
                    <Link className="signup-link" to={"/signup"}>
                        Don't have an account?
                    </Link>
                    <button disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
