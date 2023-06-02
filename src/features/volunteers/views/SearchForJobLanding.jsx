/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { SearchJobEnding, SearchJobForm, SearchJobMain } from "../components";

export const SearchForJobLanding = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [jobs, setjobs] = useState([
        {
            id: 1,
            title: "Job 1",
            description: "Job 1 Description",
            status: "Open",
        },
        {
            id: 3,
            title: "Job 2",
            description: "Job 2 Description",
            status: "Closed",
        },
        {
            id: 4,
            title: "Job 2",
            description: "Job 2 Description",
            status: "Closed",
        },
        {
            id: 2,
            title: "Job 2",
            description: "Job 2 Description",
            status: "Closed",
        },
        {
            id: 5,
            title: "Job 2",
            description: "Job 2 Description",
            status: "Closed",
        },
        {
            id: 6,
            title: "Job 2",
            description: "Job 2 Description",
            status: "Closed",
        },
        {
            id: 7,
            title: "Job 2",
            description: "Job 2 Description",
            status: "Closed",
        },
        {
            id: 8,
            title: "Job 2",
            description: "Job 2 Descriptions",
            status: "Closed",
        },
        {
            id: 9,
            title: "Job 2",
            description: "Job 2 Description",
            status: "Closed",
        },
    ]);

    useEffect(() => {
        setSearchResults(jobs);
    }, [jobs]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredResults = jobs.filter((item) => {
            const { title, description, status } = item;
            const lowerCaseQuery = query.toLowerCase();

            return (
                title.toLowerCase().includes(lowerCaseQuery) ||
                description.toLowerCase().includes(lowerCaseQuery) ||
                status.toLowerCase().includes(lowerCaseQuery)
            );
        });

        setSearchResults(filteredResults);
    };

    return (
        <div style={{ width: "100%" }}>
            <SearchJobMain />
            <SearchJobForm
                onSearch={handleSearch}
                searchResults={searchResults}
            />
            <SearchJobEnding />
        </div>
    );
};
