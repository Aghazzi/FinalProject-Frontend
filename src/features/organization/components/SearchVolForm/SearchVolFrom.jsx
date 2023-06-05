import React, { useState } from "react";
import { Card } from "antd";
import { Pagination } from "antd";

export const SearchVolForm = ({
    onSearch,
    searchResults = [],
    current,
    total,
    onChange,
    userData,
}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    const handlePageChange = (page) => {
        onChange(page);
    };

    return (
        <div
            className="jobform-container"
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--accent3-color)",
                width: "100%",
                alignItems: "center",
                padding: "30px",
                gap: "50px",
            }}
        >
            <div
                className="jobform-main"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "73%",
                }}
            >
                <h1>All Volunteers</h1>
                <input
                    type="text"
                    placeholder="  Search all"
                    value={searchQuery}
                    onChange={handleChange}
                    style={{
                        height: "50px",
                        paddingLeft: "10px",
                    }}
                />
            </div>
            <div
                className="jobform-card"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    width: "75%",
                    justifyContent: "center",
                    textAlign: "flex-start",
                }}
            >
                {userData.map((data, index) => (
                    <Card
                        key={index}
                        title={`${data.firstName} ${data.lastName}`}
                        style={{
                            width: 300,
                            height: 300,
                            overflow: "hidden",
                        }}
                        hoverable={false}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                width: "280px",
                            }}
                        >
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                Email: {data.email}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                Country: {data.country}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                City: {data.city}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                Interests: {data.interests}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                Jobs Applied:{" "}
                                {data.appliedJobs.length
                                    ? data.appliedJobs[0].title
                                    : "None"}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                <b>
                                    Status:{" "}
                                    <span
                                        style={{
                                            color: data.isActive
                                                ? "green"
                                                : "red",
                                        }}
                                    >
                                        {data.isActive
                                            ? "Open for volunteering"
                                            : "Unavailable"}
                                    </span>
                                </b>
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
            <Pagination
                current={current}
                total={total}
                onChange={handlePageChange}
            />
        </div>
    );
};
