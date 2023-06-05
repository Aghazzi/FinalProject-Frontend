/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { SearchOrgForm, SearchOrgMain } from "../components";
import { AuthContext } from "../../auth/store/Context/AuthProvider";
import { QueryClient, useQuery } from "react-query";
import { getOrgs } from "../../auth/store/authApi";
import { Loader } from "../../../common/components";

export const SearchOrgLanding = () => {
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
    } = useQuery(["org", currentPage, limit], () =>
        getOrgs(currentPage, limit)
    );

    const handleSearch = (query) => {
        setSearchQuery(query);

        const filteredResults = data.organizations.filter((item) => {
            const { title, status } = item;
            const lowerCaseQuery = query.toLowerCase();

            return (
                title?.toLowerCase().includes(lowerCaseQuery) ||
                status?.toLowerCase().includes(lowerCaseQuery)
            );
        });

        setSearchResults(filteredResults);
    };

    return (
        <div style={{ width: "100%" }}>
            <SearchOrgMain />
            {isLoading ? (
                <div
                    style={{
                        width: "130%",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <SearchOrgForm
                    onSearch={handleSearch}
                    searchResults={searchResults}
                    onChange={(page) => setCurrentPage((nextPage) => page)}
                    current={currentPage}
                    total={data.pagination?.totalDocs}
                    orgData={data.organizations}
                />
            )}
        </div>
    );
};
