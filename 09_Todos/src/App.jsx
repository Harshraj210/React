import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState(0);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      // looping to update todo if both id is same -->todo otherwise prevtodo
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };

  return (
    <TodoProvider
      value={{ updateTodo, deleteTodo, toggleComplete, addTodo, todos }}
    >
      <h1></h1>
    </TodoProvider>
  );
}

export default App;
