import { setAccessToken } from "../fakeStore";
import axios from "./axios";

type LoginResponse = {
  accessToken?: string;
  error?: "USER_NOT_FOUND" | "INVALID_PASSWORD";
};

type LoginAPIResponse = {
  accessToken: string;
};

type RefreshSessionResponse = {
  accessToken: string;
};
type RefreshSessionAPIResponse = {
  accessToken: string;
};

class AuthenticationService {
  async loginUser(formData: {
    email: string;
    password: string;
  }): Promise<LoginResponse> {
    try {
      const response = await axios.post<LoginAPIResponse>("user/loginUser", {
        email: formData.email,
        password: formData.password,
        loginType: "simple",
      });
      return { accessToken: response?.data?.accessToken };
    } catch (e) {
      if (e.status === 400) {
        if (e.data.errorCode) {
          return { error: e.data.errorCode };
        }
      }
      //TODO implement general error handling
      console.log("-AuthenticationService-loginUser", e);
    }
  }

  async refreshSession(): Promise<RefreshSessionResponse> {
    try {
      const response = await axios.post<RefreshSessionAPIResponse>(
        "refresh_session"
      );
      return { accessToken: response?.data?.accessToken };
    } catch (e) {
      console.log("-AuthenticationService-refreshSession", e);
    }
  }
}

export default new AuthenticationService();
