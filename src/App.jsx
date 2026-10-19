
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/authentication/Login";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Dashboard from "./components/students/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
