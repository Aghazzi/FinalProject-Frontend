/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { SignupFormOrg } from "../components";
import { AuthContext } from "../store/Context/AuthProvider";
import { QueryClient, useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { registerApi } from "../store/authApi";
import { Loader } from "../../../common/components";

export const SignupOrg = () => {
    const { user, setUser } = useContext(AuthContext);
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role || "";
    console.log(location.state?.role);
    console.log("hi", role);

    const {
        mutate: mutateRegister,
        isLoading,
        isError,
        error,
    } = useMutation(registerApi, {
        mutationKey: ["register"],
        onSuccess: (data) => {
            console.log("ok", data);
            setUser(data);
            localStorage.setItem("isLoggedIn", "true");
            queryClient.invalidateQueries("register");
        },
    });

    const onFinish = (values) => {
        const updatedValues = {
            ...values,
            role: role,
        };
        mutateRegister(updatedValues);
        navigate("/signin");
    };

    if (isLoading) return <Loader />;

    return (
        <div
            className="SignupForm-vol"
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px",
            }}
        >
            {isError && <div> {error} </div>}
            <h1 className="createVol-h1" style={{ fontSize: "32px" }}>
                Create an organization account
            </h1>
            <div className="SignupForm-vol-inp">
                <SignupFormOrg onFinish={onFinish} />
            </div>
        </div>
    );
};
