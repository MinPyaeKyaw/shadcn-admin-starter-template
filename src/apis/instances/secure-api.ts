import axios from "axios";

const secureApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
});

// Add a request interceptor
secureApi.interceptors.request.use(
  function (config) {
    console.log("secure request");
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
secureApi.interceptors.response.use(
  function (response) {
    console.log("secure response");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default secureApi;
