import React from "react";
import "./OrgContent.css";
import NewsImage from "../../../../images/IMAGE.png";
import { Link } from "react-router-dom";

export const OrgContent = () => {
    return (
        <div
            className="orgContent-container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "30px",
                background: "var(--accent3-color)",
            }}
        >
            <div
                className="orgContent-main"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "80%",
                    justifyContent: "space-between",
                    textAlign: "center",
                    alignItems: "center",
                }}
            >
                <div
                    className="orgContent-headers"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "50%",
                        textAlign: "flex-start",
                        gap: "20px",
                    }}
                >
                    <h2 style={{ fontSize: "20px" }}>Organizations</h2>
                    <h1 style={{ fontSize: "30px" }}>
                        Get the resources you need
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                        Avoid burnout and focus on your mission by connecting
                        with highly-skilled volunteer professionals who will
                        provide professional work on projects related to
                        fundraising, marketing, operations, and more.
                    </h2>
                    <h2 style={{ fontSize: "20px" }}>
                        Organizations receive access to Tatawu3 by simply
                        registering.
                    </h2>
                    <div className="orgContent-learn">
                        <Link
                            className="move-right1 btn"
                            style={{
                                color: "var(--accent2-color)",
                                fontSize: "17px",
                            }}
                        >
                            LEARN MORE
                        </Link>
                    </div>
                </div>
                <div
                    className="orgContent-img"
                    style={{
                        display: "flex",
                        width: "30%",
                        justifyContent: "center",
                    }}
                >
                    <img src={NewsImage} alt="NewsImage" />
                </div>
            </div>
        </div>
    );
};
