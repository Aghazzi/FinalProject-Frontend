import axios from "axios";

export const todoApi = axios.create({
    baseURL: "http://localhost:5000",
});

export const getTodos = async () => {
    const response = await todoApi.get("/jobs");
    return response.data;
};

export const addTodo = async (todo) => {
    return await todoApi.post("/jobs", todo);
};

export const updateTodo = async (todo) => {
    return await todoApi.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodo = async (id) => {
    return await todoApi.post(`/todos/${id}`, id);
};
