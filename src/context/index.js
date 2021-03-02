import { createContext, useReducer } from "react";

import { todoReducer } from "./reducer";

const Context = createContext();

export default function Provider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <Context.Provider value={{ todos, dispatch }}>{children}</Context.Provider>
  );
}

export { Context };
