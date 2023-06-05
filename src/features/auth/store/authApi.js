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

export const getVols = async (currentPage) => {
    const response = await apiInstance.get(`/user/users`);
    return response.data;
};

// list?page=${currentPage}
