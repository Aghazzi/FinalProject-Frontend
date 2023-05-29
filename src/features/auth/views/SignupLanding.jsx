import React from "react";
import { SignupCard } from "../components/SignupCard/SignupCard";
import { Link, useNavigate } from "react-router-dom";

export const SignupLanding = () => {
    const navigate = useNavigate();

    const handleSignupVol = () => {
        navigate("/signupform-vol", { state: { role: "User" } });
    };

    const handleSignupOrg = () => {
        navigate("/signupform-org", { state: { role: "Org" } });
    };

    return (
        <div
            className="SignupLanding"
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
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
                <h1>Create an account</h1>
                <h2
                    style={{
                        opacity: "0.7",
                    }}
                >
                    Join a community of people who care as much as you do
                </h2>
            </div>
            <div className="signup-landing">
                <div className="card">
                    <button onClick={handleSignupVol}>
                        <SignupCard
                            style={{ width: "310px", height: "300px" }}
                            title={"Volunteer"}
                            description={
                                "I'm a professional looking to volunteer"
                            }
                            image={
                                "https://det2iec3jodwn.cloudfront.net/images/responsive/login/illustration-volunteer.svg?v=410560"
                            }
                        />
                    </button>
                    <button onClick={handleSignupOrg}>
                        <Link to="/signupform-org">
                            <SignupCard
                                style={{ width: "310px", height: "300px" }}
                                title={"Organization"}
                                description={
                                    "My Organization is looking for volunteers"
                                }
                                image={
                                    "https://det2iec3jodwn.cloudfront.net/images/responsive/login/illustration-organization.svg?v=410560"
                                }
                            />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
