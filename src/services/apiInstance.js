import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "https://tatawu3.onrender.com",
});

apiInstance.interceptors.request.use((req) => {
    console.log(`${req.method} ${req.url}`);
    const authToken = getCookie("authToken");
    if (authToken) {
        console.log("AuthToken:", authToken);
        req.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return req;
});

apiInstance.interceptors.response.use((req) => {
    console.log(req);
    //you can also log to any logging service here like SPLUNK etc
    return req;
});

function getCookie(name) {
    const cookieValue = document.cookie.match(
        `(^|;)\\s*${name}\\s*=\\s*([^;]+)`
    );
    return cookieValue ? cookieValue.pop() : "";
}
