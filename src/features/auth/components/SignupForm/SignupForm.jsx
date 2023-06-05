import { Button, Form, Col, Input, Row } from "antd";
import "./SignupForm.css";
import React from "react";

const { Item } = Form;
const { Password } = Input;

export const SignupForm = ({ onFinish, formValues }) => {
    // const options = [
    //     { value: "option1", label: "Option 1" },
    //     { value: "option2", label: "Option 2" },
    //     { value: "option3", label: "Option 3" },
    // ];
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue(formValues);
    }, [formValues, form]);

    return (
        <Form onFinish={onFinish} form={form} layout="vertical">
            <Col>
                <Row>
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
                </Row>
                <Row>
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
                                message: "Password is Required",
                            },
                        ]}
                    >
                        <Password style={{ padding: "10px 10px" }} />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="First Name"
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: "First name is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: "Last name is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Country"
                        name="country"
                        rules={[
                            {
                                required: true,
                                message: "Country is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="City"
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: "City is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                {/* <Row>
                    <Item label="Experience" name="experience">
                        <Select mode="multiple">
                            {options.map((option) => (
                                <Select.Option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </Select.Option>
                            ))}
                        </Select>
                        <Input />
                    </Item>
                </Row> */}
                <Row>
                    <Item
                        label="Interests"
                        name="interests"
                        rules={[
                            {
                                required: true,
                                message: "Interests is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Button htmlType="submit" type="primary">
                    Submit
                </Button>
            </Col>
        </Form>
    );
};
