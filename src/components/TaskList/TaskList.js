import { useContext } from "react";
import { Context as TodoContext } from "../../context";
import Task from "../Task";
import "./TaskList.css";

export default function TaskList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul className="TaskList">
      {todos.map((todoItem) => (
        <Task key={todoItem.id} {...todoItem} />
      ))}
    </ul>
  );
}
