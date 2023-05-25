import React from "react";
import "./HeroSection.css";
import HeroImg2 from "../../../../images/Group 1.png";
import { Link } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;

export const HeroSection = () => {
    return (
        <div
            className="heroSection-container"
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(23, 44, 123, 1)",
                width: "100%",
            }}
        >
            <div
                className="herosec-main"
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "30px",
                }}
            >
                <div
                    className="herosec-headers"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "start",
                        color: "var(--accent2-color)",
                        width: "40%",
                        gap: "50px",
                    }}
                >
                    <h2 style={{ fontSize: "30px" }}>Tatawu3</h2>
                    <h1 style={{ fontSize: "35px" }}>
                        Where Talents Meets Purpose
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                        We are a networkof volunteers and nonprofit
                        organizations working together to solve urgent problems
                        and lift up communities.
                    </h2>
                </div>
                <div className="herosecImage" style={{ width: "40%" }}>
                    <img
                        alt="img"
                        style={{
                            height: "450px",
                            width: "450px",
                        }}
                        loading="lazy"
                        src={HeroImg2}
                    />
                </div>
            </div>
            <div
                className="herosec-card"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    padding: "20px",
                    gap: "20px",
                }}
            >
                <Link>
                    <Card
                        hoverable
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            width: "300px",
                            height: "150px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://det2iec3jodwn.cloudfront.net/images/responsive/login/illustration-volunteer.svg?v=410560"
                                style={{
                                    width: "70px",
                                    transform: "none",
                                }}
                            />
                        }
                    >
                        <Meta
                            title="Volunteer"
                            description="Leverage your time and talent"
                            style={{ textAlign: "center" }}
                        />
                    </Card>
                </Link>
                <Link>
                    <Card
                        hoverable
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            width: "300px",
                            height: "150px",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingRight: "10px",
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://det2iec3jodwn.cloudfront.net/images/responsive/login/illustration-organization.svg?v=410560"
                                style={{
                                    width: "70px",
                                    transform: "none",
                                }}
                            />
                        }
                    >
                        <Meta
                            title="Organization"
                            description="Boost your programming capacity"
                            style={{ textAlign: "center" }}
                        />
                    </Card>
                </Link>
            </div>
            <div
                className="herosec-learn"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    paddingBottom: "30px",
                }}
            >
                <h3
                    style={{
                        color: "var(--accent2-color)",
                        fontSize: "25px",
                    }}
                >
                    Interested?
                </h3>
                <Link
                    to="/signupcard"
                    className="move-right3 btn"
                    style={{ color: "var(--accent2-color)", fontSize: "17px" }}
                >
                    JOIN NOW
                </Link>
            </div>
        </div>
    );
};
