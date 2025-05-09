import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useAuthContext } from "./context/AuthContext";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";

function App() {
    const { authUser, isLoading } = useAuthContext();

    console.log(authUser);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="app">
            {authUser && <Navbar />}
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
        </div>
    );
}

export default App;
