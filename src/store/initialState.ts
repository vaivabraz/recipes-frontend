export type ProductType = {
  id: number;
  name: string;
  price: number;
};

export type UserType = {
  token: string;
};

export type InitialStateType = {
  products: ProductType[];
  user: UserType;
};

export const initialState: InitialStateType = {
  products: [],
  user: {
    token: "",
  },
};
