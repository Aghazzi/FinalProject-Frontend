import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright-text">
                &copy; {new Date().getFullYear()} Your Website. All rights
                reserved. {Date.now()}
            </p>
        </footer>
    );
};
