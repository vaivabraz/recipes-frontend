import axios from "./axios";

type RegisterUserResponse = {
  username?: string;
  error?: "EMAIL_ALREADY_USED";
};

type RegisterUserAPIResponse = {
  username: string;
};

class RegistrationService {
  async registerUser(formData: {
    email: string;
    password: string;
  }): Promise<RegisterUserResponse> {
    try {
      const response = await axios.post<RegisterUserAPIResponse>(
        "user/registerUser",
        {
          email: formData.email,
          password: formData.password,
          loginType: "simple",
        }
      );
      return { username: response.data.username };
    } catch (e) {
      if (e.status === 400 && e.data.errorCode) {
        return { error: e.data.errorCode };
      }
      console.log("error:", e);
      return {};
    }
  }
}

export default new RegistrationService();
