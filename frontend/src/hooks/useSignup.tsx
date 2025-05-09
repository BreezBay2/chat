import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

type SignupData = {
    username: string;
    fullname: string;
    password: string;
    confirmPassword: string;
};

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async (signupData: SignupData) => {
        try {
            setLoading(true);
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupData),
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error);
            }

            setAuthUser(data);
        } catch (error: any) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading };
};

export default useSignup;
