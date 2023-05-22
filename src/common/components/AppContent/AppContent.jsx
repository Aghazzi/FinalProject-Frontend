import React from "react";

export const AppContent = ({ children }) => {
    return (
        <div
            style={{
                display: "flex",
                flexGrow: "1",
                width: "100%",
                margin: "auto",
                alignItems: "center",
            }}
        >
            {children}
        </div>
    );
};
