import React from "react";
import "./Footer.css";
import Logo from "../../../images/Tatawu3-02.png";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
    return (
        <footer
            className="footer"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "40px",
            }}
        >
            <div>
                <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "70px", height: "70px" }}
                />
            </div>
            <div className="footerrights">
                <p className="copyright-text">
                    &copy; {new Date().getFullYear()} Your Website. All rights
                    reserved.
                    {Date.now()}
                </p>
            </div>
            <div className="footercontact"
                style={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "center",
                }}
            >
                <div
                    className="contact-info"
                    style={{
                        display: "flex",
                        gap: "30px",
                        alignSelf: "center",
                    }}
                >
                    <div className="contact-info1"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "14px",
                            gap: "10px",
                            color: "var(--secondary-color)",
                        }}
                    >
                        <p> example@example.com</p>
                        <p> +1 234 567 890</p>
                    </div>
                    <div
                        className="follow-icons"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <div className="contact-info-h"
                            style={{
                                fontSize: "14px",
                                color: "var(--secondary-color)",
                            }}
                        >
                            Follow for more info!
                        </div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <a
                                href="https://www.linkedin.com/in/ahmad-ghazzi/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook">
                                    <AiOutlineLinkedin
                                        style={{
                                            fontSize: "18px",
                                            color: "var(--main-color)",
                                        }}
                                    />
                                </i>
                            </a>
                            <a
                                href="mailto:aghazzi.1998@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter">
                                    <AiOutlineMail
                                        style={{
                                            fontSize: "18px",
                                            color: "var(--main-color)",
                                        }}
                                    />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
