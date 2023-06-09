/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useEffect } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const cookies = new Cookies();
        const myCookieValue = cookies.get("user");
        setUser(cookies.get("user"));
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
