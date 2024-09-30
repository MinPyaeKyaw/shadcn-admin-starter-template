import axios from "axios";

const publicApi = axios.create({
  baseURL: import.meta.env.API_URL,
  timeout: 1000,
});

export default publicApi;
