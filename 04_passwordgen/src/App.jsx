import { useCallback, useState } from "react";
// reactLogo and viteLogo imports are not used, you can remove them.
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //  password generation

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // appending char and numbers
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?";
    if (numberAllowed) str += "0123456789";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
  });

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-xl rounded-lg p-6 my-10 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center text-2xl mb-4">
          Password Generator
        </h1>
        {/* This div now ONLY contains the input and button */}
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
        </div>{" "}
        {/* THE DIV FOR THE INPUT+BUTTON NOW ENDS HERE */}
        <div className="flex flex-wrap text-sm gap-x-4 gap-y-2">
          <div className="flex items-center gap-x-2">
            {/* length slider */}
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
              id="length" // Added id for the label to work correctly
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
