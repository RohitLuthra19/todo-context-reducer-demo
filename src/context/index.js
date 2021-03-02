import { useState, createContext } from "react";
import { v4 } from "uuid";

const Context = createContext();

export default function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: v4(),
        todo,
        complete: false,
      },
    ]);
  };

  const updateTodo = (id, status) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      )
    );
  };

  return (
    <Context.Provider value={{ todos, addTodo, updateTodo }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
