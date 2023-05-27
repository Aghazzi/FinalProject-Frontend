import { Button, Checkbox, Form, Input } from "antd";
import "./SigninForm.css";
import AuthContext from "../../store/Context/AuthContext";
import React, { useContext } from "react";


const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
const { Item } = Form;
const { Password } = Input;

export const SigninForm = () => (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Item
            label="Email"
            name="email"
            rules={[
                {
                    pattern: new RegExp(
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    ),
                    message: "Email is invalid",
                },
                {
                    required: true,
                    message: "Email is Required",
                },
            ]}
        >
            <Input />
        </Item>
        <Item
            label="Password"
            name="password"
            rules={[
                {
                    pattern: new RegExp(
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                    ),
                    message: "Password is too weak",
                },
                {
                    required: true,
                    message: "Password is required",
                },
            ]}
        >
            <Password
                style={{
                    height: "45px",
                }}
            />
        </Item>

        <Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Item>
        <Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Item>
    </Form>
);
