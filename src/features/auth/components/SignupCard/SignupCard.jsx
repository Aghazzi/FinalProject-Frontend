import React from "react";
import "./SignupCard.css";
import { Card } from "antd";

const { Meta } = Card;

export const SignupCard = ({ title, description, image }) => {
    return (
        <>
            <section className="card">
                <Card
                    hoverable
                    style={{
                        width: 310,
                        height: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src={image}
                            style={{
                                marginLeft: "110px",
                                marginTop: "40px",
                                width: "90px",
                                transform: "none",
                            }}
                        />
                    }
                >
                    <Meta
                        title={title}
                        description={description}
                        style={{ textAlign: "center" }}
                    />
                </Card>
            </section>
        </>
    );
};
