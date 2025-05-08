import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmitForm}>
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
                <button disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
