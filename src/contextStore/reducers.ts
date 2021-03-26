import { ProductType, UserType } from "./initialState";
import { ActionMap } from "./utils";

export type Actions = ActionMap<ActionsPayload>[keyof ActionMap<ActionsPayload>];

export enum ActionTypes {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  AddToken = "ADD_TOKEN",
}

export type ActionsPayload = {
  [ActionTypes.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [ActionTypes.Delete]: {
    id: number;
  };
  [ActionTypes.AddToken]: {
    token: string;
  };
};

export const productReducer = (state: ProductType[], action: Actions) => {
  switch (action.type) {
    case ActionTypes.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case ActionTypes.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

export const userReducer = (state: UserType, action: Actions) => {
  switch (action.type) {
    case ActionTypes.AddToken:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};
