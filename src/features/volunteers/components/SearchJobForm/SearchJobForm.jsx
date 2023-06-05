import React, { useState } from "react";
import { Card } from "antd";
import { Pagination } from "antd";
import "./SearchJobForm.css";

export const SearchJobForm = ({
    onSearch,
    searchResults = [],
    current,
    total,
    onChange,
    jobData,
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
                <h1>All Projects</h1>
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
                {jobData.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        style={{
                            width: 300,
                            height: 300,
                            overflow: "hidden",
                        }}
                        hoverable
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
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
                                {data.description}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                Start Date: {data.startDate}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                End Date: {data.endDate}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                Required Skills: {data.requiredSkills}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                Schedule: {data.schedule}
                            </p>
                            <p
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    margin: "0",
                                }}
                            >
                                {" "}
                                <b>
                                    Status:{" "}
                                    <span
                                        style={{
                                            color:
                                                data.status === "open"
                                                    ? "green"
                                                    : "red",
                                        }}
                                    >
                                        {data.status === "open"
                                            ? "Open for applying"
                                            : "Closed"}
                                    </span>
                                </b>
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
            <Pagination
                d
                current={current}
                total={total}
                onChange={handlePageChange}
            />
        </div>
    );
};
