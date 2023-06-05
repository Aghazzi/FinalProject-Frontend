import React, { useState } from "react";
import { Card } from "antd";
import { Pagination } from "antd";

export const SearchOrgForm = ({
    onSearch,
    searchResults = [],
    current,
    total,
    onChange,
    orgData,
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
                <h1>All Organizations</h1>
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
                {orgData.map((data, index) => (
                    <Card
                        key={index}
                        title={data.orgName}
                        style={{
                            width: 300,
                            height: 300,
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                        }}
                        hoverable
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <p>Email: {data.email}</p>
                            <p>Country: {data.country}</p>
                            <p>Support Name: {data.contactPersonName}</p>
                            <p>Support Email: {data.contactPersonEmail}</p>
                            <p>Support Phone: {data.contactPersonPhone}</p>
                            <p>Projects Posted: {data.appliedJobs?.length}</p>
                            <p>
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
                                            ? "Open vacancies"
                                            : "No vacancies"}
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
