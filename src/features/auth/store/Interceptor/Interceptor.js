import axios from "axios";

axios.interceptors.request.use((req) => {
    console.log(`${req.method} ${req.url}`);
    //you can also log to any logging service here like SPLUNK etc
    return req;
});
axios.interceptors.response.use(
    function (response) {
        console.log(response.data.json);
        //you can also log to any logging service here like SPLUNK etc
        return response;
    },
    function (error) {
        console.log(error);
        //you can also log to any logging service here like SPLUNK etc
        return Promise.reject(error);
    }
);
axios.interceptors.request.use((request) => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    console.log("interceptor", request);
    request.headers.authorization = "SECRET_TOKEN";
    request.headers.id = "UNIQUE_ID";
    return request;
});
