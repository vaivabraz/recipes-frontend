import { InitialStateType } from "./initialState";
import { productReducer, userReducer, ActionsType } from "./reducers";

export const mainReducer = (
  { products, user }: InitialStateType,
  action: ActionsType
) => ({
  products: productReducer(products, action),
  user: userReducer(user, action),
});
