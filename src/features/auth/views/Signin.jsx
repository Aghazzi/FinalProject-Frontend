import React from "react";
import { SigninForm } from "../components";
import { Link } from "react-router-dom";

export const Signin = () => {
    return (
        <div
            className="sigin-container"
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: "100px",
                background: "var(--accent3-color)",
            }}
        >
            <div
                className="signin-card"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "60vh",
                    border: "1px solid var(--accent-color)",
                    width: "30%",
                    background: "white",
                    paddingTop: "25px",
                    gap: "60px",
                }}
            >
                <div
                    className="signinForm-h"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: "20px",
                    }}
                >
                    <h1> Welcome Back</h1>
                    <h2 style={{ opacity: "0.7" }}> Log in to your account</h2>
                </div>
                <div
                    className="signin-login"
                    style={{
                        paddingRight: "80px",
                    }}
                >
                    <SigninForm />
                </div>
            </div>
            <div
                className="signin-reg"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                    gap: "25px",
                    width: "20%",
                    height: "40vh",
                }}
            >
                <h1>New to Tatawou3?</h1>
                <h2
                    style={{
                        opacity: "0.7",
                    }}
                >
                    Tatawou3 matches talented professionals with nonprofits to
                    help them increase their capacity and achieve their
                    missions.
                </h2>
                <div>
                    <Link to="/signupcard" className="move-right1 btn">
                        CREATE AN ACCOUNT
                    </Link>
                </div>
            </div>
        </div>
    );
};
