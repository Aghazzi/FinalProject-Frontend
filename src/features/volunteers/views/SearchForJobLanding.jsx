/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { SearchJobEnding, SearchJobForm, SearchJobMain } from "../components";
import { AuthContext } from "../../auth/store/Context/AuthProvider";
import { QueryClient, useMutation, useQuery } from "react-query";
import { addJob, applyJob, getJobs } from "../../auth/store/jobApi";
import { Loader } from "../../../common/components";
import Swal from "sweetalert2";

export const SearchForJobLanding = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const { user } = useContext(AuthContext);
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
    const [anError, setAnError] = useState();

    const handleApply = (jobId) => {
        Swal.fire({
            title: "Would you like to apply for this job?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, I'd like to apply!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                apply(jobId);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                );
            }
        });
    };

    const {
        mutate: apply,
        isLoading: applyJobLoading,
        isError: isErrorApplyJob,
        error: errorApplyJob,
    } = useMutation(applyJob, {
        onSuccess: () => {
            queryClient.invalidateQueries("jobs");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Application sent!",
                showConfirmButton: false,
                timer: 1500,
            });
        },
        onError: (err) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: err.response.data.message,
            });
        },
    });

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

    return (
        <div style={{ width: "100%" }}>
            <SearchJobMain />
            {isLoading ? (
                <div
                    style={{
                        width: "130%",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <SearchJobForm
                    onSearch={handleSearch}
                    searchResults={searchResults}
                    onChange={(page) => setCurrentPage((nextPage) => page)}
                    current={currentPage}
                    total={data.pagination?.totalDocs}
                    jobData={data.jobs}
                    jobApply={handleApply}
                />
            )}
            <SearchJobEnding />
        </div>
    );
};
