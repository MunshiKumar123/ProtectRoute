import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    let x = 10;
    if (x !== 10) {
        return <Navigate to='/' />;
    }
    return children;
};
export const PublicdRoute = () => {
    let x = 10;
    if (x !== 10) {
        return <Outlet />;
    }
    return <Navigate to='/' />
};

