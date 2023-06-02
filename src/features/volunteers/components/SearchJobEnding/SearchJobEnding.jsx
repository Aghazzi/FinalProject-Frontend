import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./SearchJobEnding.css";
import { useNavigate } from "react-router-dom";

export const SearchJobEnding = () => {
    const navigate = useNavigate();

    const handleSearchOrg = () => {
        navigate("/search-orgs");
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                padding: "30px",
                background: "var(--accent3-color)",
            }}
        >
            <button style={{ border: "none" }} onClick={handleSearchOrg}>
                <Card
                    hoverable
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        width: "800px",
                        height: "200px",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "transform 0.3s ease-in-out",
                        animation: "fadeIn 1s ease-in-out",
                    }}
                    className="hover-card"
                    cover={
                        <img
                            alt="example"
                            src="https://det2iec3jodwn.cloudfront.net/gen/images/responsive/volunteer/findorganizations.jpg?v=1685461593848"
                            style={{ width: "200px" }}
                            className="hover-image"
                        />
                    }
                >
                    <Meta
                        title="Find organizations that need your help"
                        description="Browse and connect with nonprofits supporting the causes you care about"
                        style={{ textAlign: "center" }}
                    />
                </Card>
            </button>
        </div>
    );
};
