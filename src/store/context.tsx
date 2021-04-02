import React, { createContext, useReducer, Dispatch } from "react";
import { initialState, InitialStateType } from "./initialState";
import { mainReducer } from "./mainReducer";
import { ActionsType } from "./reducers";

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionsType>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
//https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
