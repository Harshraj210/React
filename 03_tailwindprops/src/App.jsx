import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"   //  path must match your file name exactly

function App() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Hello React + Tailwind</h1>
      <Card />   {/* 👈 your component */}
    </div>
  );
}

export default App;
