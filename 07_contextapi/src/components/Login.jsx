import React, { useState, useContext } from "react";
import userContext from "./context/Usercontext.js";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  // prevents from Refreshing

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(Username, Password);
  };
  return (
    <div>
      <h2>LogIn</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="px-4 py-2 rounded-md border border-gray-500 bg-gray-600 text-white"
      />{" "}
      <input
        type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="px-4 py-2 rounded-md border border-gray-500 bg-gray-600 text-white"
      />
      <button
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        onClick={handleSubmit}
      >
        LogIn
      </button>
    </div>
  );
}

export default Login;
