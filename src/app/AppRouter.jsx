import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    SignupLanding,
    Signup,
    SignupOrg,
    Signin,
} from "../features/auth/views";
import { HomePageLanding } from "../features/homePage/views";
import { SearchForJobLanding } from "../features/volunteers/views";
import {
    SearchOrgLanding,
    SearchVolLanding,
} from "../features/organization/views";
import VolProfileLanding from "../features/volunteers/views/VolProfileLanding";
import { ProjectsLanding } from "../features/jobs/views";
// import { JobList } from "../features/auth/store/features/JobList";

export const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<JobList/>}/> */}
            <Route path="/" element={<HomePageLanding />} />
            <Route path="/search-jobs" element={<SearchForJobLanding />} />
            <Route path="/search-orgs" element={<SearchOrgLanding />} />
            <Route path="/profile-vol" element={<VolProfileLanding />} />
            <Route path="/org-post-project" element={<ProjectsLanding />} />
            <Route path="/search-vol" element={<SearchVolLanding />} />
            <Route path="/#contactform" element={<HomePageLanding />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signupcard" element={<SignupLanding />} />
            <Route path="/signupform-vol" element={<Signup />} />
            <Route path="/signupform-org" element={<SignupOrg />} />
        </Routes>
    );
};
