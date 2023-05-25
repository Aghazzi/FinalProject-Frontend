import React from "react";
import VolIamge from "../../../../images/VolImage.png";
import { Link } from "react-router-dom";

export const VolContent = () => {
    return (
        <div
            className="orgContent-container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                width: "100%",
                padding: "30px",
                background: "var(--nav-color)",
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
                    gap: "70px",
                }}
            >
                <div
                    className="orgContent-img"
                    style={{
                        display: "flex",
                        width: "30%",
                        justifyContent: "center",
                    }}
                >
                    <img src={VolIamge} alt="NewsImage" />
                </div>
                <div
                    className="orgContent-headers"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "55%",
                        textAlign: "start",
                        gap: "20px",
                        color: "var(--accent2-color)",
                        paddingRight: "40px",
                    }}
                >
                    <h2 style={{ fontSize: "20px" }}>Volunteers</h2>
                    <h1 style={{ fontSize: "30px" }}>
                        Support your favorite cause
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                        Become an agent of change: Build your skill set, create
                        an instant impact through your work, and develop lasting
                        relationships with local nonprofits.
                    </h2>
                    <h2 style={{ fontSize: "20px" }}>
                        Volunteers receive access to Tatawu3 by simply
                        registering.
                    </h2>
                    <div>
                        <Link
                            className="move-right2 btn"
                            style={{
                                color: "var(--accent2-color)",
                                fontSize: "17px",
                            }}
                        >
                            LEARN MORE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
