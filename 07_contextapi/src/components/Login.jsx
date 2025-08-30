import React, { useState, useContext } from "react";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  // prevents from Refreshing

  const handleSubmit = (e) => {};
  return (
    <div>
      <h2>LogIn</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>LogIn</button>
    </div>
  );
}

export default Login;
