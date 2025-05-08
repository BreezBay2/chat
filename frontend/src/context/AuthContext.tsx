import {
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

type AuthUserType = {
    id: string;
    username: string;
    fullname: string;
    profilePicture: string;
};

const AuthContext = createContext<{
    authUser: AuthUserType | null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean;
}>({
    authUser: null,
    setAuthUser: () => {},
    isLoading: true,
});

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const res = await fetch("/api/auth/user");
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error);
                }

                setAuthUser(data);
            } catch (error: any) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAuthUser();
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, isLoading, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
