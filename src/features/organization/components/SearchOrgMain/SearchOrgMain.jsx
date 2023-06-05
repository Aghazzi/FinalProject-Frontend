import React from "react";

export const SearchOrgMain = () => {
    return (
        <div
            className="seachjobmain-container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "30px",
                gap: "40px",
                background:
                    "url(https://det2iec3jodwn.cloudfront.net/frontend/img/browse-orgs-hero-filter.58bc037.jpg) left center / cover no-repeat ",
            }}
        >
            <div
                className="searchjobmain-headers"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    padding: "30px",
                    gap: "40px",
                }}
            >
                <h1 style={{ fontSize: "35px" }}>
                    Connect with impactful organizations
                </h1>
                <h2 style={{ fontSize: "20px" }}>
                    Find & support organizations supporting causes you care
                    about
                </h2>
            </div>
        </div>
    );
};
