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
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
        );
    };

    const deleteTodo = (id) => {
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
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    return useContext(TodoContext);
};