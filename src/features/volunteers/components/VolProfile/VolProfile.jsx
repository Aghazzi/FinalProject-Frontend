import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

export const VolProfile = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                padding: "30px",
                background: "var(--accent3-color)",
                gap: "100px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                }}
            >
                <Space wrap size={32}>
                    <Avatar size={128} icon={<UserOutlined />} />
                </Space>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                    }}
                >
                    <div>
                        <h1>Name</h1>
                    </div>
                    <div>
                        <p style={{ fontSize: "15px" }}>Volunteer</p>
                        <p style={{ fontSize: "15px" }}>City, Country</p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                }}
            >
                <div>
                    <h1>Jobs Applied</h1>
                    <p style={{ fontSize: "15px" }}>0</p>
                </div>
                <div>
                    <h2>Status</h2>
                    <p style={{ fontSize: "15px" }}>Ready to volunteer</p>
                </div>
            </div>
        </div>
    );
};
