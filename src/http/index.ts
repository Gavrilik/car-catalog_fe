import axios, { AxiosRequestConfig } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = `http://localhost:5000`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  
  const getToken = ((config.headers ??=
    {}).Authorization = `Bearer ${localStorage.getItem("token")}`);
  console.log("GET", getToken);

  const setToken = localStorage.setItem("token", config.data);
  console.log("SET", setToken);


  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        const a = localStorage.setItem("token", response.data.accessToken);
        console.log(a);

        return $api.request(originalRequest);
      } catch (e) {
        console.log("не авторизирован");
      }
    }
    throw error;
  }
);

export default $api;
