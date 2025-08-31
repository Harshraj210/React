import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeContext } from './context/Theme'
import { ThemeProvider } from './context/Theme'
import { useEffect } from 'react'

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const darkTheme=()=>{
    setthemeMode('dark')  
  }
   const lightTheme=()=>{
    setthemeMode('light')  
  }
useEffect(()=>{
  document.querySelector('html').classList.remove('dark','light')
  document.querySelector('html').classList.add(themeMode)
},[themeMode])


  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <h1 className="text-2xl font-bold text-center my-4">
        Nike Air Jordan 1 Retro High
      </h1>

      <div className="flex justify-center items-center">
        <div className="w-full">
          {/* Theme Button */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Card */}
          <div className="w-full max-w-sm mx-auto flex">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider >
  )
}

export default App
