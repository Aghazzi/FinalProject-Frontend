import React, { useState } from "react";
import { Card } from "antd";
import { Pagination } from "antd";

export const SearchVolForm = ({ onSearch, searchResults }) => {
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
                {searchResults.map((result) => (
                    <Card
                        key={result.id}
                        title={result.title}
                        style={{
                            width: 300,
                            height: 300,
                            textAlign: "center",
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
                            <p>{result.description}</p>
                            <p>Status: {result.status}</p>
                            <p>Email</p>
                            <p>Country</p>
                            <p>City</p>
                            <p>Jobs Applied</p>
                        </div>
                    </Card>
                ))}
            </div>
            <Pagination defaultCurrent={1} total={50} />
        </div>
    );
};
