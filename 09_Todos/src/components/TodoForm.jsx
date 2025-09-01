import React, { useState } from "react";
// FIX #1: Updated the import path to the new .jsx filename
import { useTodo } from "../contexts/TodoContext.jsx";

function TodoForm() {
    // This state is just for this form's input field
    const [todo, setTodo] = useState("");
    
    // Get the global addTodo function from our context
    const { addTodo } = useTodo();

    const add = (e) => {
        // This stops the page from refreshing when you submit the form
        e.preventDefault();
        
        // Validation to prevent adding empty todos
        if (!todo) return;

        // Call the addTodo function from the context, passing the new todo
        addTodo({ todo: todo, completed: false });

        // Clear the input field after the todo has been added
        setTodo("");
    };

    return (
        // FIX #2: The 'add' function is now correctly linked to the form's onSubmit event
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // FIX #3: The input's value is linked to our 'todo' state
                value={todo}
                // FIX #4: The onChange updates the 'todo' state every time you type
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;