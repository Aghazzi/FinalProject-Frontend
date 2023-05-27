import axios from "axios";

export const jobsAPi = axios.create({
    baseURL: "http://localhost:5000",
});

export const getJobs = async () => {
    const response = await jobsAPi.get("/jobs");
    return response.data;
};

export const addJob = async (job) => {
    return await jobsAPi.post("/jobs", job);
};

export const updateJob = async (job) => {
    return await jobsAPi.patch(`/jobs/${job.id}`, job);
};

export const deleteJob = async (id) => {
    return await jobsAPi.post(`/jobs/${id}`, id);
};
