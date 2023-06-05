/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { SignupFormOrg } from "../components";
import { AuthContext } from "../store/Context/AuthProvider";
import { QueryClient, useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { registerApi } from "../store/authApi";
import { Loader } from "../../../common/components";
import Swal from "sweetalert2";

export const SignupOrg = () => {
    const { user, setUser } = useContext(AuthContext);
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role || "";

    const {
        mutate: mutateRegister,
        isLoading,
        isError,
        error,
    } = useMutation(registerApi, {
        mutationKey: ["register"],
        onSuccess: (data) => {
            setUser(null);
            queryClient.invalidateQueries("register");
            navigate("/signin");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registered successfully, log in please!",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });

    const onFinish = (values) => {
        const updatedValues = {
            ...values,
            role: role,
        };
        mutateRegister(updatedValues);
    };

    if (isLoading)
        return (
            <>
                <div
                    style={{
                        width: "10%",
                    }}
                ></div>
                <Loader />
            </>
        );

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
