import { useState, useContext } from "react";

import { Context as TodoContext } from "../../context";
import "./CreateTask.css";

function CreateTask() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
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
