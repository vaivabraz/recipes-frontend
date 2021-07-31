import axios from "./axios";

// = {
//   email: "testinis@test.com",
//   password: "testinis",
// }

type LoginResponse = {
  // accessToken?: string;
  // error?: "USER_NOT_FOUND" | "INVALID_PASSWORD";
};

type LoginAPIResponse = {
  accessToken: string;
};

type RefreshSessionResponse = {
  accessToken?: string;
};
type RefreshSessionAPIResponse = {
  accessToken: string;
};

class AuthenticationService {
  async loginUser(formData: {
    email: string;
    password: string;
  }): Promise<LoginResponse> {
    const response = await axios.post<LoginAPIResponse>("user/loginUser", {
      email: formData.email,
      password: formData.password,
      loginType: "simple",
    });
    return response.data;
  }

  async refreshSession(): Promise<RefreshSessionResponse> {
    try {
      const response = await axios.post<RefreshSessionAPIResponse>(
        "refresh_session"
      );
      return { accessToken: response?.data?.accessToken };
    } catch (e) {
      console.log("-AuthenticationService-refreshSession", e);
      return {};
    }
  }

  async logout() {
    try {
      await axios.get("user/logout");
    } catch (e) {
      console.log("-AuthenticationService-logout", e);
    }
  }
}

export default new AuthenticationService();
