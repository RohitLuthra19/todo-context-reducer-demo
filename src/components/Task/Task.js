import { useContext } from "react";
import { Context as TodoContext } from "../../context";
import { Action } from "../../context/reducer";
import "./Task.css";

export default function Task({ id, todo, complete }) {
  const { dispatch } = useContext(TodoContext);
  const updateTodo = (id, status) => {
    dispatch({
      type: Action.UPDATE_TODO,
      payload: {
        id,
        status,
      },
    });
  };
  return (
    <li className="Task">
      <span>
        <input
          type="checkbox"
          onChange={(e) => updateTodo(id, e.target.checked)}
        />
      </span>
      <span className={complete ? "task-done" : ""}>{todo}</span>
    </li>
  );
}
