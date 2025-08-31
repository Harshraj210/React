import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoProvider
      value={{ updateTodo, deleteTodo, toggleComplete, addTodo, todos }}
    >
      <h1></h1>
    </TodoProvider>
  );
}

export default App;
