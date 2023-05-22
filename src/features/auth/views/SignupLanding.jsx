import React from "react";
import { SignupCard } from "../components/SignupCard/SignupCard";
import { Link } from "react-router-dom";

export const SignupLanding = () => {
    return (
        <>
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
                    <h2>
                        Join a community of people who care as much as you do
                    </h2>
                </div>
                <div className="signup-landing">
                    {/* <div>
                        <h2>Are you</h2>
                    </div> */}
                    <div className="card">
                        <Link to="/signupform-vol">
                            <SignupCard
                                title={"Volunteer"}
                                description={
                                    "I'm a professional looking to volunteer"
                                }
                                image={
                                    "https://det2iec3jodwn.cloudfront.net/images/responsive/login/illustration-volunteer.svg?v=410560"
                                }
                            />
                        </Link>
                        <Link to="/signupform-org">
                            <SignupCard
                                title={"Organization"}
                                description={
                                    "My Organization is looking for volunteers"
                                }
                                image={
                                    "https://det2iec3jodwn.cloudfront.net/images/responsive/login/illustration-organization.svg?v=410560"
                                }
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
