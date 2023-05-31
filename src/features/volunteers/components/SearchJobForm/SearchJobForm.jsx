import React, { useState } from "react";
import { Card } from "antd";
import { Pagination } from "antd";
import "./SearchJobForm.css";

export const SearchJobForm = ({ onSearch, searchResults }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
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
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>All Projects</h1>
                <input
                    type="text"
                    placeholder="  Search by Title, Description, or Status"
                    value={searchQuery}
                    onChange={handleChange}
                    style={{
                        height: "50px",
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    width: "70%",
                    justifyContent: "center",
                    textAlign: "flex-start",
                }}
            >
                {searchResults.map((result) => (
                    <Card
                        key={result.id}
                        title={result.title}
                        bordered={false}
                        style={{
                            width: 300,
                            height: 300,
                            textAlign: "center",
                        }}
                        hoverable
                    >
                        <p>{result.description}</p>
                        <p>Status: {result.status}</p>
                        <p>Start Date</p>
                        <p>End Date</p>
                        <p>Required Skills</p>
                        <p>Schedule</p>
                    </Card>
                ))}
            </div>
            <Pagination defaultCurrent={1} total={50} />
        </div>
    );
};
