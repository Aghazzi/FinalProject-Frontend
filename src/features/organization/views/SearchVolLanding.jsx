/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { SearchVolMain } from "../components/SearchVolMain/SearchVolMain";
import { SearchVolForm } from "../components/SearchVolForm/SearchVolFrom";
import { AuthContext } from "../../auth/store/Context/AuthProvider";
import { QueryClient, useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getVols } from "../../auth/store/authApi";
import { apiInstance } from "../../../services";

export const SearchVolLanding = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { user, setUser } = useContext(AuthContext);
    const queryClient = new QueryClient();

    const {
        isLoading,
        isError,
        error,
        data = [],
    } = useQuery(["vol", currentPage], () => getVols(currentPage));
    console.log(data.pagination);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredResults = data.filter((item) => {
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
            <SearchVolMain />
            <SearchVolForm
                onSearch={handleSearch}
                searchResults={data.users}
                current={data.pagination?.page}
                total={data.pagination?.totalDocs}
            />
        </div>
    );
};
