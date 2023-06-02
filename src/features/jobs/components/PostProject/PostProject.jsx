import { Button, Form, Col, Input, Row } from "antd";
import React from "react";

const { Item } = Form;

export const PostProjectForm = ({ onFinish }) => {
    const [form] = Form.useForm();

    return (
        <Form onFinish={onFinish} form={form} layout="vertical">
            <Col>
                <Row>
                    <Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Title is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: "Description is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Start Date"
                        name="startDate"
                        rules={[
                            {
                                required: true,
                                message: "Start Date is Required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="End date"
                        name="endDate"
                        rules={[
                            {
                                required: true,
                                message: "End date is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Required Skills"
                        name="requiredSkills"
                        rules={[
                            {
                                required: true,
                                message: "Required Skills is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Status"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: "Status is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Schedule"
                        name="schedule"
                        rules={[
                            {
                                required: true,
                                message: "Schedule is required",
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                </Row>
                <Row>
                    <Item
                        label="Number of volunteers"
                        name="nbOfVolunteers"
                        rules={[
                            {
                                required: true,
                                message: "Number of volunteers is required",
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
