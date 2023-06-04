import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../features/auth/store/Context/AuthProvider";

export default function ProtectedRoutes({ children }) {
    const { user } = useContext(AuthContext);
    return <>{user ? <Navigate to="/PageNotFound" /> : children}</>;
}
