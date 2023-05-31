/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { SigninForm } from "../components";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/Context/AuthProvider";
import { QueryClient, useMutation } from "react-query";
import { loginApi } from "../store/authApi";
import { Loader } from "../../../common/components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Signin = () => {
    const { user, setUser } = useContext(AuthContext);
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["user"]);

    const {
        mutate: mutateLogin,
        isLoading,
        isError,
        error,
    } = useMutation(loginApi, {
        mutationKey: ["auth"],
        onSuccess: (data) => {
            console.log("signin", data.data.message);
            setUser(data);
            setCookie("user", data);
            queryClient.invalidateQueries("auth");
        },
    });

    const onFinish = (values) => {
        mutateLogin(values);
        navigate("/");
    };

    return (
        <div
            className="signin-container"
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: "100px",
                background: "var(--accent3-color)",
            }}
        >
            <div
                className="signin-card"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "60vh",
                    border: "1px solid var(--accent-color)",
                    width: "30%",
                    background: "white",
                    paddingTop: "25px",
                    gap: "60px",
                }}
            >
                <div
                    className="signinForm-h"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: "20px",
                    }}
                >
                    <h1> Welcome Back</h1>
                    <h2 style={{ opacity: "0.7" }}> Log in to your account</h2>
                </div>
                <div
                    className="signin-login"
                    style={{
                        paddingRight: "80px",
                    }}
                >
                    <SigninForm onFinish={onFinish} />
                </div>
            </div>
            <div
                className="signin-reg"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                    gap: "25px",
                    width: "20%",
                    height: "40vh",
                }}
            >
                <h1>New to Tatawu3?</h1>
                <h2
                    style={{
                        opacity: "0.7",
                    }}
                >
                    Tatawou3 matches talented professionals with nonprofits to
                    help them increase their capacity and achieve their
                    missions.
                </h2>
                <div>
                    <Link to="/signupcard" className="move-right1 btn">
                        CREATE AN ACCOUNT
                    </Link>
                </div>
            </div>
        </div>
    );
};
