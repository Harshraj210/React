import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    // date.now-->unique id
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      // looping to update todo if both id is same -->todo otherwise prevtodo
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    // reverse logic for removing
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todo);
    }
  }, []);

   useEffect(() => {localStorage.setItem("todos",JSON.stringify(todos))}, [todos]);
   
  return (
    <TodoProvider
      value={{ updateTodo, deleteTodo, toggleComplete, addTodo, todos }}
    >
      <h1></h1>
    </TodoProvider>
  );
}

export default App;
