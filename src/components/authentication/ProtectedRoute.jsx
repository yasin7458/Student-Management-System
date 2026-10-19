import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector(
        (state) => state.auth.isAuthenticated
    );

    if (isAuthenticated) {
        return children;
    } else {
        window.location.href = "/login";
        return null;
    }
}

export default ProtectedRoute;