import { InitialStateType } from "./initialState";
import { productReducer, userReducer, Actions } from "./reducers";

export const mainReducer = (
  { products, user }: InitialStateType,
  action: Actions
) => ({
  products: productReducer(products, action),
  user: userReducer(user, action),
});
