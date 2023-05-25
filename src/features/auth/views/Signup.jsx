import React from "react";
import { SignupForm } from "../components";

export const Signup = () => {
    return (
        <div
            className="SignupForm-vol"
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px",
            }}
        >
            <h1 className="createVol-h1" style={{ fontSize: "32px" }}>
                Create a volunteer account
            </h1>
            <div className="SignupForm-vol-inp">
                <SignupForm />
            </div>
        </div>
    );
};
