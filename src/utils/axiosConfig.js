import axios from "axios";
import { getTokenValue } from "./token";

const apiBaseUrl = import.meta.env.VITE_BASE_URL;

const setupAxios = axios.create({
  baseURL: apiBaseUrl,
});

setupAxios.interceptors.request.use(
  (config) => {
    const token = getTokenValue()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  
  (error) => {
    return Promise.reject(error);
  }
);

export default setupAxios;
