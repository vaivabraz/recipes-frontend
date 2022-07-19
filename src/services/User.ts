import axios from "./axios";
import { CategoryType } from "../types";

export type GetMeApiResponse = {
  username: string;
  recipesList: [];
  userCategories: CategoryType[];
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
