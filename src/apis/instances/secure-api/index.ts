import axios from "axios";

const secureApi = axios.create({
  baseURL: import.meta.env.API_URL,
  timeout: 1000,
});

export default secureApi;
