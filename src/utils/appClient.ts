import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_GATEWAY_URL
});

export default apiClient;