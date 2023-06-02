/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { SignupForm } from "../components";
import { AuthContext } from "../store/Context/AuthProvider";
import { QueryClient, useMutation } from "react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader } from "../../../common/components";
import { registerApi } from "../store/authApi";

export const Signup = () => {
    const { user, setUser } = useContext(AuthContext);
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role || "";
    console.log(location.state?.role);
    console.log("role", role);

    const [formValues, setFormValues] = useState({});

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
            // localStorage.setItem("isLoggedIn", "true");
            queryClient.invalidateQueries("register");
            navigate("/signin");
            // if (data && data.data.user) {
            // } else {
            //     //todo
            // }
        },
    });

    const onFinish = (values) => {
        const updatedValues = {
            ...values,
            role: role,
        };
        setFormValues(updatedValues);
        mutateRegister(updatedValues);
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
            {isError && <div>{error && error.response.data.message}</div>}

            <h1 className="createVol-h1" style={{ fontSize: "32px" }}>
                Create a Volunteer account
            </h1>
            <div className="SignupForm-vol-inp">
                <SignupForm onFinish={onFinish} formValues={formValues} />
            </div>
        </div>
    );
};
