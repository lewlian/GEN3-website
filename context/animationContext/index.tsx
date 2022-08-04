import React, { Dispatch, createContext, useReducer } from "react";
import AppReducer, { IAction } from "./reducer";

export interface IAppContextState {
  animationTriggered: boolean;
}

export interface InitialContextProps {
  appState: IAppContextState;
  appDispatch: Dispatch<IAction>;
}

const InitialAppContextState: IAppContextState = {
  animationTriggered: false,
};

export const AnimationContext = createContext({} as InitialContextProps);

interface IProps {
  children: any;
}

const AnimationContextProvider: React.FC<IProps> = (props: IProps) => {
  const [appState, appDispatch] = useReducer(
    AppReducer,
    InitialAppContextState
  );

  return (
    <AnimationContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AnimationContext.Provider>
  );
};

export default AnimationContextProvider;
