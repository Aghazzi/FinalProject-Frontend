/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { SearchJobEnding, SearchJobForm, SearchJobMain } from "../components";
import { AuthContext } from "../../auth/store/Context/AuthProvider";
import { QueryClient, useQuery } from "react-query";
import { getJobs } from "../../auth/store/jobApi";
import { Loader } from "../../../common/components";

export const SearchForJobLanding = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const { user, setUser } = useContext(AuthContext);
    const queryClient = new QueryClient();
    const limit = 12;

    const {
        isLoading,
        isError,
        error,
        data = [],
    } = useQuery(["job", currentPage, limit], () =>
        getJobs(currentPage, limit)
    );
    console.log(data);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredResults = searchResults.filter((item) => {
            const { title, description, status } = item;
            const lowerCaseQuery = query.toLowerCase();

            return (
                title?.toLowerCase().includes(lowerCaseQuery) ||
                description?.toLowerCase().includes(lowerCaseQuery) ||
                status?.toLowerCase().includes(lowerCaseQuery)
            );
        });

        setSearchResults(filteredResults);
    };

    if (isLoading)
        return (
            <>
                <div
                    style={{
                        width: "10%",
                    }}
                ></div>
                <Loader />;
            </>
        );

    return (
        <div style={{ width: "100%" }}>
            <SearchJobMain />
            <SearchJobForm
                onSearch={handleSearch}
                searchResults={searchResults}
                onChange={(page) => setCurrentPage((nextPage) => page)}
                current={currentPage}
                total={data.pagination?.totalDocs}
                jobData={data.jobs}
            />
            <SearchJobEnding />
        </div>
    );
};
