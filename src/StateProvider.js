//setup data layer
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//use it inside of a component
export const useStateValue = () => useContext(StateContext);
