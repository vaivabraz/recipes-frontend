import { ProductType, UserType } from "./initialState";
import { ActionMap } from "./utils";

export type ActionsType = ActionMap<ActionsPayload>[keyof ActionMap<ActionsPayload>];

export enum Actions {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  AddToken = "ADD_TOKEN",
  AddUsername = "ADD_USERNAME",
}

export type ActionsPayload = {
  [Actions.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Actions.Delete]: {
    id: number;
  };
  [Actions.AddToken]: {
    token: string;
  };
  [Actions.AddUsername]: {
    username: string;
  };
};

export const productReducer = (state: ProductType[], action: ActionsType) => {
  switch (action.type) {
    case Actions.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Actions.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

export const userReducer = (state: UserType, action: ActionsType) => {
  switch (action.type) {
    case Actions.AddToken:
      return { ...state, token: action.payload.token };
    case Actions.AddUsername:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};
