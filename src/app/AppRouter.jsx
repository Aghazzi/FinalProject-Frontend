import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignupLanding } from "../features/auth/views";
import Signup from "../features/auth/views/Signup";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<SignupLanding />} />
            <Route path="/signupcard" element={<SignupLanding />} />
            <Route path="/signupform-vol" element={<Signup />} />
            <Route path="/signupform-org" element={<Signup />} />
        </Routes>
    );
};
