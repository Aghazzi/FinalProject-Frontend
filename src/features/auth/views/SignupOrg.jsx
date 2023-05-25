import React from "react";
import { SignupFormOrg } from "../components";

export const SignupOrg = () => {
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
                Create an organization account
            </h1>
            <div className="SignupForm-vol-inp">
                <SignupFormOrg />
            </div>
        </div>
    );
};
