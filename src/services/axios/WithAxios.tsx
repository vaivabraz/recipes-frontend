import { useContext, useMemo } from "react";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Actions, AppContext } from "../../store";
import { instance as axios } from "./axiosConfig";
import jwtDecode from "jwt-decode";
import { AuthenticationService } from "../";

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
        const IsTokenValidOrUndefined = () => {
          const accessToken = state.user.token;
          if (!accessToken) {
            return true;
          }

          const { exp }: any = jwtDecode(accessToken);
          if (Date.now() >= exp * 1000) {
            return false;
          } else {
            return true;
          }
        };

        const fn = async (resolve) => {
          if (error.response?.status === 404) {
            let originalConfig = error.config;
            const isTokenExpired = !IsTokenValidOrUndefined();
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
          return Promise.reject(error);
        };
        return new Promise(fn);
      }
    );
  }, []);

  return children;
};

export default WithAxios;
