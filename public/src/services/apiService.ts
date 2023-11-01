import axios from "axios";
import environment from "../environment/environment";

const api = axios.create({
  baseURL: environment.apiURL
});

api.interceptors.request.use((config) => {
  console.log('Requesting:', config);
  return config;
});

api.interceptors.response.use((response) => {
  console.log('Response:', response);
  return response;
});

export default api;