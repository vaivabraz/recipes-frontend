import axios from "./axios";

export type GetMeApiResponse = {
  username: string;
  recipesList: [];
  userCategories: { id: number, title: string }[];
};

class UserService {
  async getCurrentUser(): Promise<GetMeApiResponse> {
    try {
      const response = await axios.get<GetMeApiResponse>("user/me");
      return response?.data;
    } catch (e) {
      console.log("getCurrentUser error", e);
    }
  }
}

export default new UserService();
