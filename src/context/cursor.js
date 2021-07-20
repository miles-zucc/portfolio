import React, { createContext, useReducer } from "react";
import CustomCursor from "../components/CustomCursor";
import CloseIcon from "../components/CloseIcon";

const initialState = {
  Component: null,
  isHidden: true,
};

export const CustomCursorContext = createContext(initialState);

export const actionTypes = {
  NO_CURSOR: "NO_CURSOR",
  CLOSE_CURSOR: "CLOSE_CURSOR",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.NO_CURSOR:
      return {
        ...state,
        isHidden: true,
      };
    case actionTypes.CLOSE_CURSOR:
      return {
        ...state,
        Component: (props) => <CloseIcon {...props} />,
        isHidden: false,
      };
    default:
      return state;
  }
}

export const actions = {
  noCursor: () => ({ type: actionTypes.NO_CURSOR }),
  zoomOutCursor: () => ({ type: actionTypes.CLOSE_CURSOR }),
};

export function CustomCursorProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isHidden, Component } = state;

  return (
    <CustomCursorContext.Provider value={{ state, dispatch }}>
      {children}
      {Component && (
        <CustomCursor isHidden={isHidden}>
          <Component />
        </CustomCursor>
      )}
    </CustomCursorContext.Provider>
  );
}
