import React from "react";

export const AppContainer = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                position: "relative",
                backgroundRepeat: "no-repeat",
                alignItems: "center",
                backgroundSize: "cover",
            }}
        >
            {children}
        </div>
    );
};
