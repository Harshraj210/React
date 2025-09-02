import React, { createContext, useContext, useState, useEffect } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // gives todo a unique Id
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    // loops through todo and removes whereid matches
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
    try {
      const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
      if (todosFromStorage && todosFromStorage.length > 0) {
        setTodos(todosFromStorage);
      }
    } catch (error) {
      console.error("Could not parse todos from localStorage", error);
    }
  }, []);

  useEffect(() => {
    // saving them to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};

// TodoContext → empty box definition.

// TodoProvider → fills the box with real data + functions.

// useTodo() → quick way to open the box and use the data anywhere.
