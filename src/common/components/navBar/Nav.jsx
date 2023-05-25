import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineBars, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../../images/Tatawu3-02.png";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsOpen(!isOpen);
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
                <Link to="home" className="logo">
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: "70px", height: "70px" }}
                    />
                </Link>
                <ul className="nav-list">
                    <div className="right-nav">
                        <li>
                            <Link to="/home" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                For Volunteers <AiOutlineDown />
                                <i className="fas fa-caret-down"></i>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="#" onClick={toggleMenu}>
                                        Navel
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={toggleMenu}>
                                        Mandarine
                                        <i className="fas fa-caret-down"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={toggleMenu}>
                                        Tangelos
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">
                                For Organizations <AiOutlineDown />
                                <i className="fas fa-caret-down"></i>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="#" onClick={toggleMenu}>
                                        Yellow Oranges
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={toggleMenu}>
                                        Green Oranges
                                        <i className="fas fa-caret-down"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={toggleMenu}>
                                        Dinner
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={toggleMenu}>
                                How it Works
                            </Link>
                        </li>
                        <li>
                            <Link to="#contactform" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </li>
                    </div>
                    <div className="button-fix">
                        {!isLoggedIn && (
                            <Link
                                onClick={toggleMenu}
                                className="move-right2 btn"
                                to="/signin"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                SIGN IN
                            </Link>
                        )}
                        {!isLoggedIn && (
                            <Link
                                onClick={toggleMenu}
                                className="move-right1 btn"
                                to="/signupcard"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                JOIN
                            </Link>
                        )}
                        {isLoggedIn && (
                            <Link
                                className="move-right3 btn"
                                onClick={handleLogout}
                                style={{
                                    width: "100px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                Log Out
                            </Link>
                        )}
                    </div>
                </ul>
            </nav>
        </header>
    );
};
