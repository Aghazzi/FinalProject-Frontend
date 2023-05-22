import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    SignupLanding,
    Signup,
    SignupOrg,
    Signin,
} from "../features/auth/views";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signupcard" element={<SignupLanding />} />
            <Route path="/signupform-vol" element={<Signup />} />
            <Route path="/signupform-org" element={<SignupOrg />} />
        </Routes>
    );
};
