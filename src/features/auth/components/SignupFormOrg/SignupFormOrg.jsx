import { Button, Form, Col, Input, Row, Tooltip, Select } from "antd";
import "./SignupFormOrg.css";

const { Item } = Form;
const { Password } = Input;
const { Option } = Select;

export const SignupFormOrg = () => {
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
                        <Tooltip
                            placement="right"
                            title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                        >
                            <div>
                                <Password style={{ padding: "10px 10px" }} />
                            </div>
                        </Tooltip>
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="First Name"
                        name="first name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your First Name!",
                            },
                        ]}
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
                                message: "Please input your Last Name!",
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
                                message: "Please input your Country!",
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
                                message: "Please input your City!",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Skills"
                        name="skills"
                        rules={[
                            {
                                required: true,
                                message: "Please input a maximum of 10 skills!",
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Experience"
                        name="experience"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Experience!",
                            },
                        ]}
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
                                message: "Please input your Interests!",
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
