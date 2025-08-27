import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import currencyinfo from "./hooks/currencyinfo";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);
  const currencyData = currencyinfo(form);
  const options = object.keys(currencyData);
  //  Swap logic
  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };
  const convert = () => {
    setconvertedamount(amount * currencyData[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/10149293/pexels-photo-10149293.jpeg)`,
        }}
      ></div>
    </>
  );
}

export default App;
