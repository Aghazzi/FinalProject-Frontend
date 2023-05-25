import React from "react";
import { Button, Form, Input } from "antd";
import "./ContactForm.css";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
    },
};

const { Item } = Form;

export const ContactForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
        form.resetFields();
    };
    return (
        <div
            className="contact-container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "var(--accent3-color)",
                width: "100%",
                alignItems: "center",
                padding: "30px",
            }}
        >
            <div
                className="contact-headers"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1 style={{ fontSize: "30px" }}>Support Request Form</h1>
                <h2 style={{ fontSize: "20px" }}>
                    By filling out this form, you can request professional
                    support
                </h2>
            </div>
            <div className="contact-form" id="contactform" >
                <Form
                    layout="vertical"
                    name="nest-messages"
                    form={form}
                    onFinish={onFinish}
                    style={{
                        width: "400px",
                    }}
                    validateMessages={validateMessages}
                >
                    <Item
                        name={["user", "name"]}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                    <Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                    <Item
                        name={["user", "introduction"]}
                        label="Introduction"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Item>
                    <Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Item>
                </Form>
            </div>
        </div>
    );
};
