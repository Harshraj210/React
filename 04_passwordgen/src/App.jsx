import { useCallback, useState, useEffect , useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./App.css";

// useEffect --> runs code immediately when dependcies change 
// useRef --> getting the direct access to input ele.
// toast --> for notifications

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passref = useRef(null)

  //  password generation

  const generatePassword = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      // appending char and numbers
      if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?";
      if (numberAllowed) str += "0123456789";
      for (let i = 1; i < length; i++) {
        // * str.length --> based char length
        const char = Math.floor(Math.random() * str.length);
        // appending
        pass += str.charAt(char);
      }
      setpassword(pass);
    },
    // dependencies array --> based on this pass changes
    [length, numberAllowed, charAllowed]
  );
// cpying the pass
  const CopypasswordToClipboard = useCallback(() => {
    if (password) {
      window.navigator.clipboard.writeText(password);
      passref.current?.select()
      toast.success("Copied to clipboard!");
    }
  },[password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

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
            ref={passref}
          />
          <button
            onClick={CopypasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-4 py-1 shrink-0 hover:bg-blue-700 active:scale-95 transition-transform duration-150"
          >
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
