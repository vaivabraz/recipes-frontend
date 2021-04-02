import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://awesome-recipes-backend.herokuapp.com/api/";
const BASE_URL_LOCALHOST = "http://localhost:3001/api/";

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
