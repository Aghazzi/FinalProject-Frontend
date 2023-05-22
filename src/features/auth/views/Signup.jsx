import React from "react";
import { SignupForm } from "../components";

export default function Signup() {
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
            <SignupForm />
        </div>
    );
}
