import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-xl rounded-lg p-6 my-10 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center text-2xl mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 bg-gray-700 text-white"
            placeholder="Generated Password"
            readOnly
          />
          <button className="outline-none bg-blue-600 text-white px-4 py-1 shrink-0 hover:bg-blue-700 active:scale-95 transition-transform duration-150">
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
