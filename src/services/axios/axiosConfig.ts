import axios, { AxiosInstance } from "axios";


export const instance: AxiosInstance = axios.create({
  withCredentials: true,
});
