import React from "react";
import { Card } from "antd";
import "./Stats.css";
import { Link } from "react-router-dom";

export const Stats = () => {
    return (
        <div
            className="stats-container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                width: "100%",
                padding: "30px",
                background: "var(--accent3-color)",
                gap: "30px",
            }}
        >
            <div
                className="stats-headers"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    gap: "15px",
                }}
            >
                <h1 style={{ fontSize: "30px" }}>Expertise you can trust</h1>
                <h2 style={{ fontSize: "20px" }}>
                    We provide organizations and volunteers with choice,
                    capacity, and wrap-around support so they can achieve their
                    missions.
                </h2>
            </div>

            <div
                className="stats-cards"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "60%",
                    justifyContent: "space-between",
                }}
            >
                <Card
                    title="1 M+"
                    bordered
                    style={{
                        width: 220,
                    }}
                    hoverable
                >
                    <p style={{ color: "var(--nav-color)" }}>Hours Donated</p>
                </Card>
                <Card
                    title="250 k+"
                    bordered
                    style={{
                        width: 220,
                    }}
                    hoverable
                >
                    <p style={{ color: "var(--nav-color)" }}>Money Saved</p>
                </Card>
                <Card
                    title="50 K+"
                    bordered
                    style={{
                        width: 220,
                    }}
                    hoverable
                >
                    <p style={{ color: "var(--nav-color)" }}>
                        Projects Matched
                    </p>
                </Card>
                <Card
                    title="20 K+"
                    bordered
                    style={{
                        width: 220,
                    }}
                    hoverable
                >
                    <p style={{ color: "var(--nav-color)" }}>Users</p>
                </Card>
            </div>
            <div className="stats-latest">
                <Link
                    to="/search-jobs"
                    className="move-right1 btn "
                    style={{
                        fontSize: "17px",
                    }}
                >
                    LATEST JOBS
                </Link>
            </div>
        </div>
    );
};
