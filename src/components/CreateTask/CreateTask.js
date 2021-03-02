import { useState, useContext } from "react";
import { v4 } from "uuid";

import { Context as TodoContext } from "../../context";
import { Action } from "../../context/reducer";
import "./CreateTask.css";

function CreateTask() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: Action.CREATE_TODO,
      payload: {
        id: v4(),
        todo,
        complete: false,
      },
    });
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit} className="CreateTask">
      <input
        type="text"
        value={todo}
        placeholder="Todo Name"
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button>Add</button>
    </form>
  );
}

export default CreateTask;
