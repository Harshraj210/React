import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(newColor) {
    setColor((prev) => (prev === "olive" ? "red" : "olive"));
  }

  return (
    <div
      className="w-full h-screen transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-16 inset-x-0 flex justify-center px-2">
        <div className="flex justify-center w-full shadow-lg px-3 py-2 rounded-3xl bg-white">
          <button
            onClick={changeColor}
            className="px-6 py-2 rounded-full font-semibold text-white bg-blue-500 shadow-md hover:bg-blue-600 active:scale-95 transition duration-200"
          >
            Change Background
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
