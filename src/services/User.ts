import axios from "./axios";

type GetMeApiResponse = {
  username: string;
  recipesList: [];
  userCategories: string[];
};

class UserService {
  async getCurrentUser(): Promise<GetMeApiResponse> {
    try {
      const response = await axios.get<GetMeApiResponse>("user/me");
      return response?.data;
    } catch (e) {}
  }
}

export default new UserService();
