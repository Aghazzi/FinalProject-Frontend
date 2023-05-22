/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineBars, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <header>
            <nav className={isActive ? "active" : ""}>
                <div className="menu-icons" onClick={toggleMenu}>
                    <i className="fas fa-bars">
                        <AiOutlineBars />
                    </i>
                    <i className="fas fa-times">
                        <AiOutlineBars />
                    </i>
                </div>
                <a href="index.html" className="logo">
                    CODEBRO
                </a>
                <ul className="nav-list">
                    <div className="right-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">
                                For Volunteers <AiOutlineDown />
                                <i className="fas fa-caret-down"></i>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#">Navel</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Mandarine
                                        <i className="fas fa-caret-down"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Tangelos</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                For Organizations <AiOutlineDown />
                                <i className="fas fa-caret-down"></i>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#">Yellow Oranges</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Green Oranges
                                        <i className="fas fa-caret-down"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Dinner</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">How it Works</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </div>
                    <div className="button-fix">
                        <ul>
                            {!isLoggedIn && (
                                <li className="move-right btn">
                                    <Link to="/">
                                        <button>SIGN IN</button>
                                    </Link>
                                </li>
                            )}
                            {!isLoggedIn && (
                                <li className="move-right0 btn">
                                    <Link to="/signupcard">
                                        <button>JOIN</button>
                                    </Link>
                                </li>
                            )}
                            {isLoggedIn && (
                                <li
                                    className="move-right1 btn"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        right: "40px",
                                    }}
                                >
                                    <button
                                        className="logout"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </ul>
            </nav>
        </header>
    );
};
