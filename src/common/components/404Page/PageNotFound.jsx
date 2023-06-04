import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
    return (
        <div
            id="mainC"
            style={{
                width: "60%",
                boxShadow: "0px 0px 2px 2px var(--nav-color)",
            }}
        >
            <div className="message">
                <h1>404</h1>
                <h3>the page you seek does not exist</h3>
            </div>
            <div className="footer">
                <Link to="/">
                    Go Back To Home Page <span></span>
                </Link>
                <p className="legal">
                    &copy; {new Date().getFullYear()} Your Website. All rights
                    reserved. {Date.now()}
                </p>
            </div>
        </div>
    );
};
