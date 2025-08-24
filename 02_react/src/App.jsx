import { useState } from "react";

import "./App.css";

function App() {
  // to update value on webpage 

  const [counter,setCounter] = useState(19)
  // [variable , method]
  // let counter = 10;
  const addValue = ()=>{
    setCounter(counter+1)
    
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Welcome to React</h1>
      {/* variable injection */}

      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button> 
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer :</p>
    </>
  );
}

export default App;
