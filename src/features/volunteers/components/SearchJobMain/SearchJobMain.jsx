import React from "react";
import "./SearchJobMain.css";

export const SearchJobMain = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "30px",
                gap: "40px",
                background:
                    "url(https://det2iec3jodwn.cloudfront.net/frontend/img/volunteer_hero3X.8cfd6ca.jpg) left center / cover no-repeat ",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "70%",
                    padding: "30px",
                    gap: "40px",
                    background: "rgb(233, 229, 229, 0.08)",
                }}
            >
                <h1 style={{ fontSize: "35px" }}>
                    {" "}
                    Volunteer your skills virtually
                </h1>
                <h2 style={{ fontSize: "20px" }}>
                    All organizations face challenges in fulfilling their
                    missions. Support vital and vulnerable causes by uplifting
                    them below.
                </h2>
            </div>
        </div>
    );
};
