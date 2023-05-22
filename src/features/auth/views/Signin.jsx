import React from "react";
import { SigninForm } from "../components";

export const Signin = () => {
    return (
        <div
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px",
            }}
        >
            <SigninForm />
        </div>
    );
};
