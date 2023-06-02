import { apiInstance } from "../../../services";

export const getJobs = async () => {
    const response = await apiInstance.get("/job/jobs");
    return response.data;
};

export const addJob = async (job) => {
    return await apiInstance.post("/job", job);
};

export const updateJob = async (job) => {
    return await apiInstance.patch(`/job/${job.id}`, job);
};

export const deleteJob = async (id) => {
    return await apiInstance.post(`/job/org/${id}`, id);
};
