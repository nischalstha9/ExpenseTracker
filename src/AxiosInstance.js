import axios from "axios";

const baseURL = "http://localhost:8000/api/v1/";
// const baseURL = "https://aakogako.herokuapp.com/api/v1/";
const AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const refreshPath = "auth/token/refresh/";

//Add a response interceptor

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === refreshPath) {
      window.location.pathname = "/logout";
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return AxiosInstance.post(refreshPath).then((res) => {
        if (res.status === 200) {
          return AxiosInstance(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
