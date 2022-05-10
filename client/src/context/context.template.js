/* istanbul ignore file */

import React, { createContext, useReducer } from "react";

const contextTemplate = (reducer, actions, initialState) => {
  const Context = createContext(initialState);

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};
    for (let action in actions) {
      boundActions[action] = actions[action](dispatch);
    }

    return (
      <Context.Provider
        value={{
          state,
          ...boundActions,
        }}
      >
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default contextTemplate;
