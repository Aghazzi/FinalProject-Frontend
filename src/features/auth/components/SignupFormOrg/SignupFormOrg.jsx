import { Button, Form, Col, Input, Row } from "antd";
import "./SignupFormOrg.css";

const { Item } = Form;
const { Password } = Input;

export const SignupFormOrg = ({ onFinish }) => {
    const [form] = Form.useForm();

    return (
        <Form onFinish={onFinish} form={form} layout="vertical">
            <Col>
                <Row>
                    <Item
                        label="Organization Name"
                        name="orgName"
                        rules={[
                            {
                                required: true,
                                message: "Organization's name is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
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
                        label="Support Email"
                        name="contactPersonEmail"
                        rules={[
                            {
                                required: true,
                                message: "Support email is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Support Name"
                        name="contactPersonName"
                        rules={[
                            {
                                required: true,
                                message: "Support name is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Support Phone"
                        name="contactPersonPhone"
                        rules={[
                            {
                                required: true,
                                message: "Support phone is required",
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
                <Button htmlType="submit" type="primary">
                    Submit
                </Button>
            </Col>
        </Form>
    );
};
