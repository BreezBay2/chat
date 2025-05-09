import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
    const [signupForm, setSignupForm] = useState({
        username: "",
        fullname: "",
        password: "",
        confirmPassword: "",
    });

    const { signup, loading } = useSignup();

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        signup(signupForm);
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    placeholder="Username"
                    value={signupForm.username}
                    onChange={(e) =>
                        setSignupForm({
                            ...signupForm,
                            username: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Your Name"
                    value={signupForm.fullname}
                    onChange={(e) =>
                        setSignupForm({
                            ...signupForm,
                            fullname: e.target.value,
                        })
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={signupForm.password}
                    onChange={(e) =>
                        setSignupForm({
                            ...signupForm,
                            password: e.target.value,
                        })
                    }
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={signupForm.confirmPassword}
                    onChange={(e) =>
                        setSignupForm({
                            ...signupForm,
                            confirmPassword: e.target.value,
                        })
                    }
                />
                <Link to={"/login"}>Already have an account?</Link>
                <button disabled={loading}>
                    {loading ? "Loading..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default SignupPage;
