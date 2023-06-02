import React from "react";
import "./VolProfileMain.css";

export const VolProfileMain = () => {
    return (
        <div
            className="volprofilemain-container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                width: "100%",
                alignItems: "start",
                padding: "30px",
                gap: "30px",
            }}
        >
            <div
                style={{
                    borderBottom: "1px solid var(--accent3-color)",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <h1 style={{ fontSize: "25px" }}>About</h1>
            </div>
            <div
                className="volprofile-exp"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    gap: "20px",
                }}
            >
                <h1> Experience</h1>
                <p style={{ fontSize: "15px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    animi, iste facilis harum ipsa quis excepturi assumenda
                    adipisci obcaecati, debitis quod vero? Optio at repellendus
                    voluptatibus nihil consequuntur ab aliquid.
                </p>
                <p style={{ fontSize: "15px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    animi, iste facilis harum ipsa quis excepturi assumenda
                    adipisci obcaecati, debitis quod vero? Optio at repellendus
                    voluptatibus nihil consequuntur ab aliquid.
                </p>
            </div>
            <div className="volprofile-inter"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    gap: "20px",
                }}
            >
                <h1> Interests</h1>
                <p style={{ fontSize: "15px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    animi, iste facilis harum ipsa quis excepturi assumenda
                    adipisci obcaecati, debitis quod vero? Optio at repellendus
                    voluptatibus nihil consequuntur ab aliquid.
                </p>
                <p style={{ fontSize: "15px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    animi, iste facilis harum ipsa quis excepturi assumenda
                    adipisci obcaecati, debitis quod vero? Optio at repellendus
                    voluptatibus nihil consequuntur ab aliquid.
                </p>
            </div>
        </div>
    );
};
