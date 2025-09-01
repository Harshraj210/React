import React, { useState } from "react";
import { useTodo } from "../contexts/Todo";

function TodoItem({ todo }) {
  const [TodoEditable, setTodoEditable] = useState(false);
  const [Todomsg, setTodomsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useState();

  const EditTodo = () => {
    // Pass the id and the updated todo object
    updateTodo(todo.id, { ...todo, todo: Todomsg });
    setTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={` flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 text-black 
                ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`
                    border outline-none w-full bg-transparent rounded-lg 
                    ${
                      isTodoEditable
                        ? "border-black/20 px-2"
                        : "border-transparent"
                    } 
                    ${todo.completed ? "line-through" : ""}
                `}
        value={Todomsg}
        onChange={(e) => setTodomsg(e.target.value)}
        readOnly={!TodoEditable}
      />
    </div>
  );
}
export default TodoItem;
