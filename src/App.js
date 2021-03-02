import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>

      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
