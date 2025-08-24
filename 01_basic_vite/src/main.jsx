import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const Reactelement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "CLick me to visit Google :)",
};

function Myapp(){
  return(
    <div>
      <h1>hello from custom react</h1>
    </div>
  )
}

const AnotherElement=(
  <a href ="https://google.com" target="_blank">Visit Google</a>
  // it takes only evaluated expression not which has to be eveluated
)

createRoot(document.getElementById("root")).render(
  AnotherElement()
);
