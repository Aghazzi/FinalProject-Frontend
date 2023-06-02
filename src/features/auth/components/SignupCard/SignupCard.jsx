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
                        animation: "fadeIn 1s ease-in-out",
                    }}
                    className="hover-card"
                    cover={
                        <img
                            alt="example"
                            src={image}
                            style={{
                                marginLeft: "110px",
                                marginTop: "40px",
                                width: "90px",
                            }}
                            className="hover-image"
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
