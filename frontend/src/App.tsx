import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useAuthContext } from "./context/AuthContext";
import SignupPage from "./pages/SignupPage";

function App() {
    const { authUser, isLoading } = useAuthContext();

    console.log(authUser);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>Hello World</h1>
            <Routes>
                <Route
                    path="/"
                    element={
                        authUser ? <HomePage /> : <Navigate to={"/login"} />
                    }
                />
                <Route
                    path="/login"
                    element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
                />
                <Route
                    path="/signup"
                    element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
                />
            </Routes>
        </>
    );
}

export default App;
