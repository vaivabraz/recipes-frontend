import { useContext, useMemo } from "react";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Actions, AppContext } from "../../store";
import { AuthenticationService } from "../";
import { instance as axios } from "./axiosConfig";
import { IsTokenValidOrUndefined } from "./utils";

const WithAxios = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  useMemo(() => {
    axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const accessToken = state.user.token;
        if (accessToken) {
          config.headers.common["Authorization"] = `vbck ${accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        const fn = async (resolve, reject) => {
          if (error.response?.status === 404) {
            let originalConfig = error.config;
            const accessToken = state.user.token;
            const isTokenExpired = !IsTokenValidOrUndefined(accessToken);
            if (isTokenExpired) {
              const response = await AuthenticationService.refreshSession();
              dispatch({
                type: Actions.AddToken,
                payload: { token: response.data.accessToken },
              });
              originalConfig.headers.Authorization = `vbck ${response.data.accessToken}`;
              return axios(originalConfig);
            }
            resolve();
          }

          return reject(error.response);
        };
        return new Promise(fn);
      }
    );
  }, []);

  return children;
};

export default WithAxios;
