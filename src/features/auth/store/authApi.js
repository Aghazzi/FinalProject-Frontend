import { apiInstance } from "../../../services";

export const loginApi = async (data) => {
    return await apiInstance.post("/user/login", data);
};

export const registerApi = async (data) => {
    return await apiInstance.post("/user/register", data);
};

export const logoutApi = async () => {
    return await apiInstance.post("/user/logout");
};

export const getVols = async (currentPage, limit) => {
    const response = await apiInstance.get(
        `/user/users?page=${currentPage}&limit=${limit}`
    );
    return response.data;
};

export const getOrgs = async (currentPage, limit) => {
    const response = await apiInstance.get(
        `/user/organizations?page=${currentPage}&limit=${limit}`
    );
    return response.data;
};

export const getUserById = async (id) => {
    const response = await apiInstance.get(`/user/user/${id}`, id);
    return response.data;
};
