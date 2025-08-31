import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/Theme.jsx'

function App() {
  

  return (
    // The ThemeProvider we created in Theme.js now wraps everything.
    // It handles all the logic internally.
    <ThemeProvider>
      <div className="flex flex-col items-center min-h-screen py-8 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-center my-4 text-gray-900 dark:text-white">
          Nike Air Jordan 1 Retro High
        </h1>

        {/* Theme Button */}
        <div className="w-full max-w-sm flex justify-end mb-4 px-4">
          <ThemeBtn />
        </div>

        {/* Card */}
        <div className="w-full max-w-sm">
          <Card />
        </div>
      </div>
    </ThemeProvider >
  )
}

export default App