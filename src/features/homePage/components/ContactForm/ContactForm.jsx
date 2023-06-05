import React from "react";
import { Button, Form, Input } from "antd";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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

    const onFinish = () => {
        form.validateFields()
            .then((values) => {
                emailjs
                    .send(
                        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
                        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
                        values,
                        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
                    )
                    .then((result) => {
                        console.log(result.text);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Thank you for contacting us, we'll get back to you shortly!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    })
                    .catch((error) => {
                        console.log(error.text);
                    })
                    .finally(() => {
                        form.resetFields();
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div
            className="contact-container"
            id="contactform"
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
            <div className="contactform-form">
                <Form
                    layout="vertical"
                    name="nest-messages"
                    form={form}
                    style={{
                        width: "400px",
                    }}
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Item
                        name="name"
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
                        name="email"
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
                        name="message"
                        label="Message"
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
