import React from "react";
import { PostProjectForm } from "../components";

export const ProjectsLanding = () => {
    return (
        <div
            className="SignupLanding"
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "30px",
                gap: "30px",
            }}
        >
            <div
                className="signupLanding-title"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>Post a Job</h1>
            </div>
            <PostProjectForm />
        </div>
    );
};
