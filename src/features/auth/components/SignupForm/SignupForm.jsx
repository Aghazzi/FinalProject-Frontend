import { Button, Form, Col, Input, Row } from "antd";
import "./SignupForm.css";

const { Item } = Form;
const { Password } = Input;

export const SignupForm = () => {
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values);
        form.resetFields();
    };
    return (
        <Form onFinish={handleSubmit} form={form} layout="vertical">
            <Col>
                <Row>
                    <Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                pattern: new RegExp(
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                                ),
                                message: "Email is invalid",
                            },
                            {
                                required: true,
                                message: "Email is Required",
                            },
                        ]}
                        normalize={(value, prevVal, prevVals) => value.trim()}
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
                                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
                                ),
                                message: "Password is too weak",
                            },
                            {
                                required: true,
                                message: "Password is Required",
                            },
                        ]}
                        normalize={(value, prevVal, prevVals) => value.trim()}
                    >
                        {/* <Tooltip
                            placement="right"
                            title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                        >
                        <div> */}
                        <Password style={{ padding: "10px 10px" }} />
                        {/* </div>
                        </Tooltip> */}
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="First Name"
                        name="first name"
                        rules={[
                            {
                                required: true,
                                message: "First name is required",
                            },
                        ]}
                        normalize={(value, prevVal, prevVals) => value.trim()}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Last Name"
                        name="last name"
                        rules={[
                            {
                                required: true,
                                message: "Last name is required",
                            },
                        ]}
                        normalize={(value, prevVal, prevVals) => value.trim()}
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
                        normalize={(value, prevVal, prevVals) => value.trim()}
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
                        normalize={(value, prevVal, prevVals) => value.trim()}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Experience"
                        name="experience"
                        rules={[
                            {
                                required: true,
                                message: "Experience is required",
                            },
                        ]}
                        normalize={(value, prevVal, prevVals) => value.trim()}
                    >
                        <Input />
                    </Item>
                </Row>
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
                        normalize={(value, prevVal, prevVals) => value.trim()}
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
