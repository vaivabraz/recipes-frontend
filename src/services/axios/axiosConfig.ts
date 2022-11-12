import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://my-awesome-kitchen.vercel.app/";
// const BASE_URL = "http://localhost:3005/";

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
