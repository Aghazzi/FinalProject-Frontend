/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import { AiOutlineBars, AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../images/Tatawu3-02.png";
import { AuthContext } from "../../../features/auth/store/Context/AuthProvider";
import { QueryClient, useMutation } from "react-query";
import { logoutApi } from "../../../features/auth/store/authApi";
import { Loader } from "../Loader/Loader";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const queryClient = new QueryClient();
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const userRole = user?.role;
    const navigate = useNavigate();
    const location = useLocation();

    const {
        mutate: mutateLogout,
        isLoading,
        isError,
        error,
    } = useMutation(logoutApi, {
        mutationKey: ["logout"],
        onSuccess: (data) => {
            setUser(null);
            removeCookie("user");
            removeCookie("authToken");
            setIsLoggedIn(false);
            queryClient.invalidateQueries("logout");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged Out Successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });

    useEffect(() => {
        setIsLoggedIn(!!user || !!cookies.user);
    }, [user, cookies]);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        mutateLogout();
        removeCookie("user");
        setIsLoggedIn(false);
    };

    const handleClickForNavigation = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            navigate("/signin");
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Log in first please!",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        setIsActive(!isActive);
        setIsOpen(!isOpen);
    };

    return (
        <header>
            {isError && <div>{error}</div>}
            <nav className={isActive ? "active" : ""}>
                <div className="menu-icons" onClick={toggleMenu}>
                    <i className="fas fa-bars">
                        <AiOutlineBars />
                    </i>
                    <i className="fas fa-times">
                        <AiOutlineClose />
                    </i>
                </div>
                <Link to="/" className="logo">
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: "70px", height: "70px" }}
                    />
                </Link>
                <ul className="nav-list">
                    <div className="right-nav">
                        <li>
                            <Link to="/" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        {!isLoggedIn || (isLoggedIn && userRole !== "Org") ? (
                            <li>
                                <Link to="#" onClick={handleClickForNavigation}>
                                    For Volunteers <AiOutlineDown />
                                    <i className="fas fa-caret-down"></i>
                                </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link
                                            to="/search-jobs"
                                            onClick={handleClickForNavigation}
                                        >
                                            Search Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/search-orgs"
                                            onClick={handleClickForNavigation}
                                        >
                                            Search Organizations
                                            <i className="fas fa-caret-down"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/profile-vol"
                                            onClick={handleClickForNavigation}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        ) : null}
                        {!isLoggedIn || (isLoggedIn && userRole !== "User") ? (
                            <li>
                                <Link to="#" onClick={handleClickForNavigation}>
                                    For Organizations <AiOutlineDown />
                                    <i className="fas fa-caret-down"></i>
                                </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link
                                            to="/org-post-project"
                                            onClick={handleClickForNavigation}
                                        >
                                            Post a Project
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/search-vol"
                                            onClick={handleClickForNavigation}
                                        >
                                            Search Volunteers
                                            <i className="fas fa-caret-down"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        ) : null}
                        <li>
                            <a href="/#contactform" onClick={toggleMenu}>
                                Contact
                            </a>
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
