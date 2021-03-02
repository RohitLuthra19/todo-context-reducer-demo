import { useContext } from "react";
import { Context as TodoContext } from "../../context";
import "./Task.css";

export default function Task({ id, todo, complete }) {
  const { updateTodo } = useContext(TodoContext);
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
