/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { SearchJobEnding, SearchJobForm, SearchJobMain } from "../components";
import { AuthContext } from "../../auth/store/Context/AuthProvider";
import { QueryClient, useMutation, useQuery } from "react-query";
import { addJob, getJobs } from "../../auth/store/jobApi";
import { Loader } from "../../../common/components";
import Swal from "sweetalert2";

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

    const handleApply = (jobId) => {
        addJobs.mutate(jobId);
    };

    const addJobs = useMutation(addJob, {
        onSuccess: () => {
            queryClient.invalidateQueries("jobs");
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
                    addJobs.mutate();
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        "Cancelled",
                        "Your imaginary file is safe :)",
                        "error"
                    );
                }
            });
        },
    });

    useEffect(() => {
        if (isError) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: `${error.response.data.message}`,
            });
        }
    }, [isError, error]);

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
                jobApply={handleApply}
            />
            <SearchJobEnding />
        </div>
    );
};
