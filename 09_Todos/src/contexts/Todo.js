import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo Message",
      completed: false,
    },
  ],
  c: () => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: () => {},
});

export const useTodo=()=>{
  return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider
